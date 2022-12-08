import { LogSuccess } from './src/utils/loggers';
import dotenv from 'dotenv';
import server from './src/server/index';
import { LogError } from './src/utils/loggers';



dotenv.config()
const port = process.env.PORT || 3000

//Run server
server.listen(port, ()=>{
    LogSuccess(`[SERVER ON]: Runnin on port ${port}`)
});

//Server error?
server.on('error', (error)=>{
    LogError(`[SERVER ERROR]: ${error}`)
})