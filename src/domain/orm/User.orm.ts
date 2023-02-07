import { userEntity } from "../entities/User.entities";
import { LogSuccess, LogError } from "../../utils/loggers";
import { IUser } from "../interfaces/IUser.interface";
import { IAuth } from "../interfaces/IAuth.interface";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//CRUD

/**
 * Method obtain all users
 */
export const getAllUsers =async (): Promise <any []| undefined> => {
    try {
        let userModel = userEntity();
        
        //Search all users
        return await userModel.find({isDelete: false})
    } catch (error) {
        LogError(`[ORM error]: Getting all users: ${error}`)
    }
}

export const getUserByID = async (id: string): Promise <any | undefined> => {
    try {
        //traer el modelo
        let userModel = userEntity();
        
        //Search all users
        return await userModel.findById(id)
    } catch (error) {
        LogError(`[ORM error]: Getting user id: ${error}`)
    }
}

export const deleteUserByID = async (id: string): Promise <any | undefined> => {
    try {
        //traer el modelo
        let userModel = userEntity();
        
        //Search all users
        return await userModel.deleteOne({_id:id})
    } catch (error) {
        LogError(`[ORM error]: Deleting user id: ${error}`)
    }
}

export const createUser = async (user:any): Promise <any | undefined> => {
    try {
        //traer el modelo
        let userModel = userEntity();
        
        //create
        return await userModel.create(user) //name , email, age
    } catch (error) {
        LogError(`[ORM error]: Creating user id: ${error}`)
    }
}


export const updateUserByID = async (id: string, user:any): Promise <any | undefined> => {
    try {
        //traer el modelo
        let userModel = userEntity();
        
        
        //update
        return await userModel.findByIdAndUpdate(id, user) //name , email, age
    } catch (error) {
        LogError(`[ORM error]: Updating user id ${id}: ${error}`)
    }
}

export const registerUser = async (user:IUser): Promise <any | undefined> => {
    try {
        //traer el modelo
        let userModel = userEntity();
        
        //create
        return await userModel.create(user) //name , email, age
    } catch (error) {
        LogError(`[ORM error]: Register user id: ${error}`)
    }
}

export const loginUser = async (auth:IAuth): Promise <any | undefined> => {
    try {
        let userModel = userEntity();
        userModel.findOne({email: auth.email}, (err: any, user: IUser) =>{
            if(err){ //searching error

            }
            if(!user){ //user not found

            }

            //bcrypt
            let validPassword = bcrypt.compareSync(auth.password, user.password);
            if (!validPassword) {  //wrong password Not authorized 401
                //return response 
            }

            // secret JWT en .env
            let token = jwt.sign({email: user.email}, process.env.SECRET_JWT, {
                expiresIn: 86400 //24 hr
            })
        });

   
    } catch (error) {
   
    }
}

export const logoutUser = async (): Promise <any | undefined> => {
    try {

    } catch (error) {
       
    }
}

