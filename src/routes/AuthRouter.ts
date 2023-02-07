

import express, {Request, Response, Router} from 'express';
import { AuthController } from '../controller/authController';
import { LogInfo, LogSuccess } from '../utils/loggers'; 
import { IUser } from '../domain/interfaces/IUser.interface';
import bcrypt from 'bcrypt';
import { IAuth } from '../domain/interfaces/IAuth.interface';

let authRouter = express.Router();


authRouter.route('/auth/register')
    .post( async (req: Request, res: Response)=> {
        let {name, password, email , age} = req.body;
        let hashedPassword = ''
        if (name && password && email && age){
            hashedPassword = bcrypt.hashSync(password, 8)
          
            let newUser: IUser = {
                name,
                password,
                email,
                age
            }
            const controller: AuthController = new AuthController();
            const response: any = await controller.registerUser(newUser);
            return res.status(200).send(response);

        }
       
        
    })

    authRouter.route('/auth/login')
    .post( async (req: Request, res: Response)=> {
        let {email, password } = req.body;
        let hashedPassword = ''
        if (password && email ){
            hashedPassword = bcrypt.hashSync(password, 8)
          
            let auth: IAuth = {
                email,
                password,   
            }
            const controller: AuthController = new AuthController();
            const response: any = await controller.loginUser(auth);

            //Send response to client with a token jwt
            return res.status(200).send(response);

        }
       
        
    })


    export default authRouter;