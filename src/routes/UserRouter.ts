
import express, {Request, Response, Router} from 'express';
import { UserController } from '../controller/UsersController';
import { LogInfo, LogSuccess } from '../utils/loggers'; 
import { IUser } from '../domain/interfaces/IUser.interface';
import { verifyToken } from '../middlewares/verifyToken.middleware';

//Router from express
let usersRouter = express.Router();

import bodyParser  from 'body-parser'

const jsonParser = bodyParser.json();

// GET -> http:localhost:3000/api/users?id=1293823sdb
usersRouter.route('/')
    .get(verifyToken, async (req: Request, res: Response)=>{
        let id: any = req?.query?.id;
        //pagination
        let page: any = req?.query?.page || 1;
        let limit: any = req?.query?.limit || 10;
        LogInfo(`Query Param ${id}`);
        
        //Controller Instance to execute method
        const controller: UserController = new UserController();

        //obtain response
        const response: any = await  controller.getUsers(page, limit , id)

        //send res to client
        return res.status(200).send(response)
    })
    

    .delete( verifyToken,async (req: Request, res: Response)=> {
        let id: any = req?.query?.id;
        LogInfo(`Query Delete Param ${id}`);

        //Controller Instance to execute method
        const controller: UserController = new UserController();

        //obtain response
        const response: any = await  controller.deleteUser(id)

        //send res to client
        return res.status(200).send(response)
    })

    //POST
/*
    .post( async (req: Request, res: Response)=> {
        const controller: UserController = new UserController();
        //const {name, email, age} = req.body
        const {name, email, age}: any = req?.query;
        let name2: any = req?.body?.name
        LogSuccess(`name of body: ${name2}`)
    
        let user = {
            name: name  ,
            email: email ,
            age: age | 0
        }
  
        const response: any = await  controller.createUser(user)

        //send res to client
        return res.status(201).send(response)
    })
    */

    .put( verifyToken, async (req: Request, res: Response)=> {
        //Controller Instance to execute method
        const controller: UserController = new UserController();

        const {name, email, age}: any = req?.query;
        let id: any = req?.query?.id;
        LogInfo(`Query Update User ${id}: ${name}, ${email},${age}`);



        let user = {
            name,
            email,
            age
        }

        //obtain response
        const response: any = await  controller.updateUser(id, user)

        //send res to client
        return res.status(204).send(response)
    })




    export default usersRouter;