import { BasicResponse } from '@/controller/types';
import express, {Request, Response} from 'express';
import { HelloController } from '../controller/helloController';
import { LogInfo } from '../utils/loggers';

//Router from express
let helloRouter = express.Router();

// GET -> http:localhost:3000/api/hello?name=Pepe
helloRouter.route('/')
    .get(async (req: Request, res: Response)=>{
        let name: any = req?.query?.name;
        LogInfo(`QueryParam: ${name}`);

        //Controller Instance to execute method
        const controller: HelloController = new HelloController();

        //obtain response
        const response: BasicResponse = await  controller.getMessage(name);

        //send res to client
        return res.send(response)
    })


    export default helloRouter