import { userEntity } from "../entities/User.entities";
import { LogSuccess, LogError } from "../../utils/loggers";
import { IUser } from "../interfaces/IUser.interface";
import { IAuth } from "../interfaces/IAuth.interface";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
import { UserResponse } from "../types/UserResponse";
import { kataEntity } from "../entities/Kata.entity";
import { IKata } from "../interfaces/Kata.interface";
import mongoose from "mongoose";
dotenv.config()

const SECRET_JTW = process.env.SECRET_JWT || 'ENCRYPTTEXT123';

/**
 * Method obtain all users
 */
export const getAllUsers =async (page: number, limit:  number): Promise <any []| undefined> => {
    try {
        let userModel = userEntity();

        //let response: UserResponse 
        let response : any = {}
        //Limite y paginacion - search all users
        await userModel.find({isDelete: false})
            .select('email name age katas')
            .limit(limit)
            .skip((page - 1)* limit)
            //.projection({email:1, name: 1, age: 1})
            .exec(). then((users: IUser[])=>{
                response.users = users;
            })

            // count total collections db
            await userModel.countDocuments().then((total: number) =>{
                response.totalPages = Math.ceil(total/ limit);  //numero de paginas que se generan - Redondeo
                response.currentPage = page;
            });

            return response
      
    } catch (error) {
        LogError(`[ORM error]: Getting all users: ${error}`)
    }
}

export const getUserByID = async (id: string): Promise <any | undefined> => {
    try {
        //traer el modelo
        let userModel = userEntity();
        
        //Search all users
        return await userModel.findById(id) .select('email name age katas')
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

/*  USER CREATE SE VA A IR A AUTH
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
*/

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
        let userFound: IUser | undefined;
        let token = undefined;
         
        await  userModel.findOne({email: auth.email}).then((user: IUser)=>{
            userFound = user;
            console.log(`[User found]`);

        }).catch((error) =>{
            console.log(`[ERROR Authentication in ORM]: User not found`);
            throw new Error (`[ERROR Authentication in ORM]: User not found`);
        })

        let validPassword = bcrypt.compareSync(auth.password, userFound!.password);

        if (!validPassword) {  //wrong password Not authorized 401
            console.log(`[ERROR Authentication password match]: Password isnt correct`);
            throw new Error (`[ERROR Authentication password match]: Password not valid`);
        }

        token = jwt.sign({email: userFound!.email}, SECRET_JTW, {
            expiresIn: 86400 //24 hr
        });

        return {
            user: userFound,
            token
        }

    } catch (error) {
        LogError(`[ORM] Error Login- ${error}`)
    }
}

export const logoutUser = async (): Promise <any | undefined> => {
    try {

    } catch (error) {
       
    }
}


export const getKatasUser = async ( page: number, limit:  number, id: string): Promise <any []| undefined> => {
    try {
        let userModel = userEntity();
        let katasModel = kataEntity();
        let katasFound:IKata [] = []
 
        let response : any = {
            katas: []
        }

       
        await userModel.findById(id).then(async (user) =>{
            response.user = user.email;
           
           
            //buscar id dentro de user.katas y retorna promesa de katas

            //create types to search
           let objectIds: mongoose.Types.ObjectId [] = [];
           user.katas.forEach( (kataID: string) => {
                let objectsId = new mongoose.Types.ObjectId(kataID);
                objectIds.push(objectsId)
           });

           await katasModel.find({"_id": {"$in": objectIds}}).then((katas: IKata[]) =>{
                katasFound = katas
            })

            response.katas = katasFound
           
            
        }).catch((error) => {
            LogError(`[ORM] Error Getting User in Katas- ${error}`)
            response = {
                message: "Error User katas"
            }
        })

           
        return response
    } catch (error) {
        LogError(`[ORM error]: Getting all users: ${error}`)
    }

  
}

