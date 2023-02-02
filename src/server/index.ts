
import express, {Express, Request, Response} from 'express';


// Seguridad
import cors from 'cors';
import helmet from 'helmet';

// Swagger
import  SwaggerUi  from 'swagger-ui-express';

// Root routes
import rootRouter from '../routes'
import mongoose from 'mongoose';


const server: Express = express();

// * Swagger config and route
server.use(
    '/docs', 
    SwaggerUi.serve,
    SwaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
            explorer: true
        }
    })
)


//Define server to use '/api' and use rootRouter from 'index.ts' in routes
// de aqui la ruta locaslhost:3000/api/....
server.use('/api', rootRouter)

//Static server (depsues de crear tsoa) 
server.use(express.static('public'));


// TODO: MONO mongoose
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/codeverification')

mongoose.connection.on('connected', () => {
    console.log('connected');
    console.log(mongoose.connection.readyState); //logs 1
  });

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
