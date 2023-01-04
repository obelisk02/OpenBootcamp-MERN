import { userEntity } from "../entities/User.entities";
import { LogSuccess, LogError } from "@/utils/loggers";

//CRUD

/**
 * Method obtain all users
 */
export const GetAllUsers =async () => {
    try {
        let userModel = userEntity();
        
        //Search all users
        return await userModel.find({isDelete: false})
    } catch (error) {
        LogError(`[ORM error]: Getting all users: ${error}`)
    }
}

