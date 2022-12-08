
import express, {Express, Request, Response} from 'express';


// Seguridad
import cors from 'cors';
import helmet from 'helmet';

// TODO: HTTPS

// Root routes
import rootRouter from '../routes'


const server: Express = express();


//Define server to use '/api' and use rootRouter from 'index.ts' in routes
// de aqui la ruta locaslhost:3000/api/....
server.use('/api', rootRouter)

//Static server (depsues de crear tsoa) 
server.use(express.static('public'));


// TODO: MONO mongoose

//Seguridad 
server.use(helmet());
server.use(cors());

//Content type config
server.use(express.urlencoded({
    extended:true,
    limit: '50mb'
}))

server.use(express.json({ limit:'50mb'}))

//Redireccionar locahost:3000 --> localhost:3000/api
server.get('/', (req: Request, res: Response) =>{
    res.redirect('/api')
})

export default server
