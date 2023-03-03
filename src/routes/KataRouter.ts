import express, {Request, Response, Router} from 'express';
import { KatasController } from '../controller/KatasController';
import { LogInfo, LogSuccess } from '../utils/loggers'; 
import { IKata, KataLevel } from '../domain/interfaces/Kata.interface'; 
import { verifyToken } from '../middlewares/verifyToken.middleware';

//Router from express
let katasRouter = express.Router();

import bodyParser  from 'body-parser'

const jsonParser = bodyParser.json();

// GET -> http:localhost:3000/api/users?id=1293823sdb
katasRouter.route('/')
    .get(verifyToken, async (req: Request, res: Response)=>{
        let id: any = req?.query?.id;
        //pagination
        let page: any = req?.query?.page || 1;
        let limit: any = req?.query?.limit || 10;
        LogInfo(`Query Param ${id}`);
        
        //Controller Instance to execute method
        const controller: KatasController = new KatasController();

        //obtain response
        const response: any = await  controller.getKatas(page, limit , id)

        //send res to client
        return res.status(200).send(response)
    })
    

    .delete( verifyToken,async (req: Request, res: Response)=> {
        let id: any = req?.query?.id;
        LogInfo(`Query Delete Param ${id}`);

        //Controller Instance to execute method
        const controller: KatasController = new KatasController();

        //obtain response
        const response: any = await  controller.deleteKata(id)

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

    .put(jsonParser, verifyToken, async (req: Request, res: Response)=> {
        //Controller Instance to execute method
        const controller: KatasController = new KatasController();

        //const {name, email, age}: any = req?.query;
        let id: any = req?.query?.id;
        let name: string = req?.body?.name;
        let description: string = req?.body?.description || ''
        let level : KataLevel = req?.body?.level || KataLevel.BASIC;
        let intents : number = req?.body?.intents || 0;
        let stars : number = req?.body?.stars || 1;
        let creator: string = req?.body?.creator;
        let solution: string = req?.body?.solution || '';
        let participants: string [] = req?.body?.participants || [];

        LogInfo(`Query Update Kata ${id}: ${name}`);
        if (id && name && description && level && intents>= 0 && stars>= 0 && creator && solution && participants.length >= 0){

            let kata: IKata = {
                name,
                description,
                level,
                intents,
                stars,
                creator,
                solution,
                participants
            }
    
            //obtain response
            const response: any = await  controller.updateKata(id, kata)
             //send res to client
            return res.status(200).send(response)
        }
        else {
            return res.status(400).send({
                message: '[ERROR] Updating kata - no atributes '
            })
        }
       
    })

    .post(jsonParser, verifyToken ,async (req: Request, res: Response)=> {
        const controller: KatasController = new KatasController();

        let name: string = req?.body?.name;
        let description: string = req?.body?.description || 'Default Description'
        let level : KataLevel = req?.body?.level || KataLevel.BASIC;
        let intents : number = req?.body?.intents || 0;
        let stars : number = req?.body?.stars || 1;
        let creator: string = req?.body?.creator;
        let solution: string = req?.body?.solution || 'Default Solution';
        let participants: string [] = req?.body?.participants || [];

        LogInfo(`Query Create Kata ${creator}: ${name}`);
        if ( name && description && level && intents>= 0 && stars>= 0 && creator && solution && participants.length >= 0){

            let kata: IKata = {
                name,
                description,
                level,
                intents,
                stars,
                creator,
                solution,
                participants
            }
    
            //obtain response
            const response: any = await  controller.createKata(kata)
             //send res to client
            return res.status(201).send(response)
        }
        else {
            return res.status(400).send({
                message: '[ERROR] Creating kata - no atributes '
            })
        }
    })



    export default katasRouter;