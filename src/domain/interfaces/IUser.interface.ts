import { IKata } from "./Kata.interface";

export interface IUser {
    name: string,
    email: string,
    password: string,
    age: number,
    katas: string[]
}