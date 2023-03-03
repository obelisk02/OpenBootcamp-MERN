import {Delete, Get, Patch, Post, Put, Query, Route, Tags} from "tsoa";
import { IKataController } from "./interfaces";
import { LogSuccess, LogError, LogWarning  } from "../utils/loggers";

//ORM
import { getAllKatas, getKataByID, deleteKataByID, createKata, updateKataByID } from "../domain/orm/Kata.orm";
import { IKata } from "../domain/interfaces/Kata.interface";


@Route("/api/katas")
@Tags("KatasController")
export class KatasController implements IKataController {


    
    /**
     * @param {number} page numero de pagina
     * @param {number} limit limite de articulos por pagina
     * @param {string} id of kata (optional)
     * @returns All katas or specific user id
     */
    @Get("/")
    public async getKatas(@Query()page: number , limit: number , id?: string | undefined): Promise<any> {
        let response: any = ""

        if(id){
            LogSuccess(`[/api/katas] Get katas id - ${id}`)
            response = await getKataByID(id);
        }
        else {
            LogSuccess("[/api/katas] Get all katas request")
            response = await getAllKatas(page , limit);
        }

        return response;
    }

    /**
     * 
     * @param {object} kata data de kata
     * @returns  message success
     */
    @Post("/")
    public async createKata(kata: IKata): Promise<any> {
        let response : any = ""

    
        if(kata){
            LogSuccess(`[/api/katas] Created kata with id - ${kata.name}`)
            await createKata(kata).then((r)=>{
                response = {
                    message: `Kata success created ${kata.name}`
                }
            })
        }
        else {
            LogWarning('[api/katas] Register needs kata entity')
            response = {
                message: 'Kata not created: provide a kata entity'
            }
        }
        
        return response
    }


    /**
     * Endpoint delete kata by id
     * @param {string} id of kata to delete
     * @returns message success
     */
    @Delete("/")
    public async deleteKata(id: string): Promise<any> {
        let response: any = ""

        if(id){
            LogSuccess(`[/api/katas] Delete kata id - ${id}`)
            await deleteKataByID(id).then((r) =>{
                response = {
                    status: 204,
                    message: `Success - Delete kata ${id}`
                }
            })
        }
        else {
            LogWarning("[/api/katas] Delete kata without ID request")
            response = {
                status: 400,
                message: `No id in request`
            }
        }

        return response;
    }


    /**
     * 
     * @param id id para actualizar
     * @param user campos de kata editados
     * @returns message success
     */
 @Put("/")
    public async updateKata(id: string, kata: IKata): Promise<any> {
        let response: any = ""

        if(id){
            LogSuccess(`[/api/katas] Update kata id - ${id}`)
            await updateKataByID(id , kata).then((r) =>{
                response = {
                    message: `Success - Updated kata ${id}`
                }
            });
        }
        else {
            LogWarning("[/api/katas] UPdate kata without ID request")
            response = {
                message: `No id in request - Provide ID`
            }
        }

        return response;
    }
    
}