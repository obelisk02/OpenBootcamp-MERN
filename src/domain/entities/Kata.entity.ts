import { IKata } from "../interfaces/Kata.interface";
import mongoose from "mongoose";


export const kataEntity = () => {

    let kataSchema = new mongoose.Schema<IKata>( //El esquema es de tipo IUser
        {
            name: {type: String, required: true},
            description: {type: String, required: true},
            level: {type: String, required: true},
            intents: {type: Number, required: true},
            stars: {type: Number, required: true},
            solution: {type: String, required: true},
            creator: {type: String, required: true}, //id del creador
            participants: {type: [], required: true},
            
        }
    )

    return mongoose.models.Katas || mongoose.model<IKata>('Katas',kataSchema) //si existe un modelo Users
}

