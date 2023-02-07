import {Delete, Get, Patch, Post, Put, Query, Route, Tags} from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError, LogWarning  } from "../utils/loggers";

//ORM - Users
import { getAllUsers, getUserByID, deleteUserByID, createUser, updateUserByID} from "../domain/orm/User.orm";

@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController {
  
  

    /**
     * 
     * @param {string} id of user (optional)
     * @returns All users or specific user id
     */
    @Get("/")
    public async getUsers(@Query()id?: string): Promise<any> {
        let response: any = ""

        if(id){
            LogSuccess(`[/api/users] Get user id - ${id}`)
            response = await getUserByID(id);
        }
        else {
            LogSuccess("[/api/users] Get all users request")
            response = await getAllUsers();
        }

        return response;
    }

    /*public async getUserByID(@Query()id?: string): Promise<any> {
        LogSuccess(`[/api/users] Get user id request - ${id}`)

        return {
            message: `obtaining user ${id}`
        }
    } */

    /**
     * Endpoint delete user by id
     * @param {string} id of user to delete
     * @returns message success
     */
    @Delete("/")
    public async deleteUser(@Query()id?: string): Promise<any> {
        let response: any = ""

        if(id){
            LogSuccess(`[/api/users] Delete user id - ${id}`)
            await deleteUserByID(id).then((r) =>{
                response = {
                    status: 204,
                    message: `Success - Delete user ${id}`
                }
            })
        }
        else {
            LogWarning("[/api/users] Delete user without ID request")
            response = {
                status: 400,
                message: `No id in request`
            }
        }

        return response;
    }

    /**
     * 
     * @param {string} user campos de data info del usuario
     * @returns message succes created
     */
    @Post("/")
    public async createUser(@Query()user: any): Promise<any> {
        
        let response : any = ""

        await createUser(user).then((r)=>{
            LogSuccess(`[/api/users] Created user id - ${user}`)
            response = {
                message: `User created ${user.name}`
            }
        })
        return response
    }

    /**
     * 
     * @param id id para actualizar
     * @param user campos de user editados
     * @returns message succes
     */
    @Put("/")
    public async updateUser(@Query()id: string, user: any): Promise<any> {
              let response: any = ""

        if(id){
            LogSuccess(`[/api/users] Update user id - ${id}`)
            await updateUserByID(id , user).then((r) =>{
                response = {
                    message: `Success - Updated user ${id}`
                }
            })
        }
        else {
            LogWarning("[/api/users] UPdate user without ID request")
            response = {
                message: `No id in request - Provide ID`
            }
        }

        return response;
        
    }
   
}