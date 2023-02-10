import {Delete, Get, Patch, Post, Put, Query, Route, Tags} from "tsoa";
import { IAuthController, IUserController } from "./interfaces";
import { LogSuccess, LogError, LogWarning  } from "../utils/loggers";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuth } from "../domain/interfaces/IAuth.interface";

import { registerUser, loginUser, logoutUser, getAllUsers, getUserByID} from "../domain/orm/User.orm";
import { AuthResponse, ErrorResponse } from "./types";
@Route("/api/auth")
@Tags("AuthController")
export class AuthController implements IAuthController{

    @Post("/register")
    public async registerUser(user: IUser): Promise<any> {

        let response: any = '';
        if (user){
            
            await registerUser(user).then((r) =>{
                LogSuccess(`[/api/auth/register] Register new user ${user.email}`);
                response = {
                    message: `User created successfully ${user.email}`
                }
            })
        }
        else {
            LogWarning(`[/api/auth/register] Register needs user`);
            response = {
                message: `Please provide a user`
            }
        }
        return response;
       
    }

    @Post("/login")
    public async loginUser(auth: IAuth): Promise<any> {

        let response: AuthResponse | ErrorResponse | undefined;
      
        if(auth){
           
                LogSuccess(`[/api/auth/login] Login new user ${auth.email}`);
                let data = await loginUser(auth);

              

                response = {
                    message: `Welcome ${data.user.name}`,
                    token: data.token  //JWT generated for logged user
                }   
        }
        else {
            LogWarning(`[/api/auth/login] Login error no data (email, password)`);
            response = {
                message: `Please provide a email and password`,   
                error: '[Error auth] email and password needed'
        }  
    }

    return response;
    }

    @Post("/logout")
    public async logoutUser(): Promise<any> {
        let response:any = 'asd' ;
    

    return response;
    }

    /**
     * Endpoint to retrieve user's information
     * Middleware: verifyToken
     * Headers x-access-token needed with valid jwt
     * @param {string} id 
     * @returns all user data by id
     */
    @Get("/profile")
    public async userData(@Query()id: string): Promise<any> {
        let response: any = ""

        if(id){
            LogSuccess(`[/api/users] Get user id - ${id}`)
            response = await getUserByID(id);

            //remove password
            response.password = ''
        }
        return response;
    }
}