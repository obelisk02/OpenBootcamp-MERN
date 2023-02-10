

import express, {Request, Response, Router} from 'express';
import { AuthController } from '../controller/authController';
import { LogInfo, LogSuccess, LogWarning } from '../utils/loggers'; 
import { IUser } from '../domain/interfaces/IUser.interface';
import bcrypt from 'bcrypt';
import { IAuth } from '../domain/interfaces/IAuth.interface';


//Middleware
import { verifyToken } from '../middlewares/verifyToken.middleware';

let authRouter = express.Router();

//Body parser
import bodyParser  from 'body-parser'
const jsonParser = bodyParser.json();


authRouter.route('/register')
    .post( jsonParser, async (req: Request, res: Response)=> {
        let {name, password, email , age} = req.body;
        let hashedPassword = ''
        if (name && password && email && age){
            hashedPassword = bcrypt.hashSync(password, 8)
          
            let newUser: IUser = {
                name,
                password: hashedPassword,
                email,
                age
            }
            const controller: AuthController = new AuthController();
            const response: any = await controller.registerUser(newUser);
            return res.status(200).send(response);

        }
       
        
    })

    authRouter.route('/login')
    .post(jsonParser, async (req: Request, res: Response)=> {
        let {email, password } = req?.body;
        const controller: AuthController = new AuthController();

        if (password && email ){
          
            let auth: IAuth = {
                email,
                password,   
            }
            
            const response: any = await controller.loginUser(auth);

            //Send response to client with a token jwt
            return res.status(200).send(response);
        }
       
        else {
            LogWarning("[/login] Error getting data user");
            res.status(400).send({
                message: '[Error] Data user is missing'
            })
        }
        
    });

    //Route protected by verify token
    authRouter.route('/profile')
        .get(verifyToken, async (req: Request, res: Response) =>{

            //Obtain id user
            let id: any = req?.query?.id;

            if(id){
                const controller: AuthController = new AuthController();
                let response: any = await controller.userData(id);

                res.status(200).send(response)
            }
            else {
                return res.status(401).send({
                    message: 'NOT AUTHORIZED'
                })
            }
        })

    export default authRouter;