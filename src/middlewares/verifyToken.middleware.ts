import  jwt  from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

/**
 * 
 * @param {Request} Original request previous verify
 * @param {Response} response to verifycation jwt
 * @param {NextFunction} next function to be executed
 * @returns Error verification or next execution
 */
export const verifyToken = (req: Request, res: Response, next: NextFunction) =>{
    //Check header from req for 'x-access-token'
    let token:any = req.headers['x-access-token'];
    
    //verify if jwt exists
    if (token!){
        return res.status(403).send({
            authentication: `Missing Jwt`,
            message: `You dont have permission`
        })
    }

    //Verify token
    jwt.verify(token, '', (err: any, decoded: any)=>{
        if(err){
            return res.status(500).send({
                authentication: `JWT failed`,
                message: `Fail to verify jwt in request`
            })
        }
    })

    //req.userId = decoded.id
    // pass id or user to next 
    next();


}