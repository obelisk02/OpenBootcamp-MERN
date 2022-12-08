
/**
 * Root router
 * REdirector to routers
 */

import express, {Request,Response} from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/loggers';

// instancia del server 
let server = express()

// instancia router
let rootRouter = express.Router()

//Activate for requests to /api
// GET /api
rootRouter.get('/', (req: Request, res: Response) =>{
    LogInfo('GET: /api/')
    res.send("Root api, welcome")
})


//redirection to router & controllers
server.use('/', rootRouter);        // local/api/
server.use('/hello', helloRouter)   // local/api/hello  --> HelloRouter.ts


export default server