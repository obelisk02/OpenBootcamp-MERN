import mongoose from "mongoose";
import { IUser } from '../interfaces/IUser.interface';

export const userEntity = () => {

    let userSchema = new mongoose.Schema<IUser>( //El esquema es de tipo IUser
        {
            name: {type: String, required: true},
            email: {type: String, required: true},
            password: {type: String, required: true},
            age: { type: Number, required: true},
            katas: { type: [], requeried: true}
        }
    )

    return mongoose.models.Users || mongoose.model<IUser>('Users',userSchema) //si existe un modelo Users
}

