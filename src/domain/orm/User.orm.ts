import { userEntity } from "../entities/User.entities";
import { LogSuccess, LogError } from "../../utils/loggers";

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

