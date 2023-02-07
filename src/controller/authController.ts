import {Delete, Get, Patch, Post, Put, Query, Route, Tags} from "tsoa";
import { IAuthController, IUserController } from "./interfaces";
import { LogSuccess, LogError, LogWarning  } from "../utils/loggers";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuth } from "../domain/interfaces/IAuth.interface";

import { registerUser, loginUser, logoutUser} from "../domain/orm/User.orm";
@Route("/api/auth")
@Tags("AuthController")
export class AuthController implements IAuthController{

    @Post("/register")
    public async registerUser(user: IUser): Promise<any> {

        let response: any = '';
        if (user){
            
            await registerUser(user).then((r) =>{
                LogSuccess(`[/api/auth/register] Register new user ${user}`);
                response = {
                    message: `User created successfully ${user.name}`
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

        let response: any = '';
      
        if(auth){
            await loginUser(auth).then((r) =>{
                LogSuccess(`[/api/auth/login] Login new user ${auth.email}`);

                response = {
                    message: `User logged successfully ${auth.email}`,
                    token: r.token  //JWT generated for logged user
                }
            })
        }
        else {
            LogWarning(`[/api/auth/login] Login error no data (email, password)`);
            response = {
                message: `Please provide a email and password`,   
        }

        return response;
    }
    }

    @Post("/logout")
    public async logoutUser(): Promise<any> {
        let response:any = 'asd' ;
    

    return response;
    }
}