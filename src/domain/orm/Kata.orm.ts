import { kataEntity } from "../entities/Kata.entity"; 
import { LogSuccess, LogError } from "../../utils/loggers";
import { IKata } from "../interfaces/Kata.interface";
import { UserResponse } from "../types/UserResponse";

import dotenv from 'dotenv';
dotenv.config()



/**
 * Method obtain all katas
 */
export const getAllKatas =async (page: number, limit:  number): Promise <any []| undefined> => {
    try {
        let kataModel = kataEntity();

        //let response: UserResponse 
        let response : any = {}
        //Limite y paginacion - search all users
        await kataModel.find({isDelete: false})
            .limit(limit)
            .skip((page - 1)* limit)
            //.projection({email:1, name: 1, age: 1})
            .exec(). then((katas: IKata[])=>{
                response.katas = katas;
            })

            // count total collections db
            await kataModel.countDocuments().then((total: number) =>{
                response.totalPages = Math.ceil(total/ limit);  //numero de paginas que se generan - Redondeo
                response.currentPage = page;
            });

            return response
      
    } catch (error) {
        LogError(`[ORM error]: Getting all katas: ${error}`)
    }
}


// Get Kata by ID
export const getKataByID = async (id: string): Promise <any | undefined> => {
    try {
        //traer el modelo
        let kataModel = kataEntity();
        
        //Search all users
        return await kataModel.findById(id) 
    } catch (error) {
        LogError(`[ORM error]: Getting kata id: ${error}`)
    }
}

//Delete kata with id
export const deleteKataByID = async (id: string): Promise <any | undefined> => {
    try {
        //traer el modelo
        let kataModel = kataEntity();
        
        return await kataModel.deleteOne({_id:id})
    } catch (error) {
        LogError(`[ORM error]: Deleting kata id: ${error}`)
    }
}


export const createKata = async (kata:IKata): Promise <any | undefined> => {
    try {
        //traer el modelo
        let kataModel = kataEntity();
        
        //create
        return await kataModel.create(kata) 
    } catch (error) {
        LogError(`[ORM error]: Creating kata id: ${error}`)
    }
}


export const updateKataByID = async (id: string, kata:IKata): Promise <any | undefined> => {
    try {
        //traer el modelo
        let kataModel = kataEntity();
        
        
        //update
        return await kataModel.findByIdAndUpdate(id, kata)
    } catch (error) {
        LogError(`[ORM error]: Updating kata id ${id}: ${error}`)
    }
}

/*
export const registerKata = async (kata:IKata): Promise <any | undefined> => {
    try {
        //traer el modelo
        let kataModel = kataEntity();
        
        //create
        return await kataModel.create(kata) 
    } catch (error) {
        LogError(`[ORM error]: Register kata id: ${error}`)
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

*/