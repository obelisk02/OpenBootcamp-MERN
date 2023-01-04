import { Get, Query, Route, Tags } from 'tsoa';
import { BasicResponse } from './types/index';
import { IHelloController } from './interfaces';
import { LogSuccess } from '../utils/loggers';


@Route("/api/hello")    //comentar con tsoa 
@Tags ("HelloController")
export class HelloController implements IHelloController {
    /** 
     * Endpoint to retrieve a message "Hello {name}" in JSON
     * @param {string | undefined} Name user to be saludado
     * @returns   {BasicResponse} Promise basic response
     */
    @Get("/")
    public async getMessage(  name?: string | undefined): Promise<BasicResponse> {  //@Query()
        LogSuccess('[/api/hello] Get request');

        return{
            message: `Hello ${name || "world"}`
        }
    }
    
}