
import { IUser } from "../../domain/interfaces/IUser.interface";
import { BasicResponse } from "../types";


export interface IHelloController {
    getMessage(name? : string): Promise<BasicResponse>
}

export interface IUserController {

    //Read all users db || obtain by id
    getUsers(page?: number , limit?: number, id?: string): Promise<any>

    //Find user by id FUSIONARON ARRIBA
    //getUserByID(id: string): Promise<any>

    //DElete user by id
    deleteUser(id: string): Promise <any>

    //Crear
    //createUser(user: any): Promise <any>

    updateUser(id: string, user: any): Promise <any>
}


export interface IAuthController {
    registerUser(user: IUser): Promise <any>

    loginUser (auth: any): Promise <any>    
}