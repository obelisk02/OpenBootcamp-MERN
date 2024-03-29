"use strict";
/**
 * Root router
 * REdirector to routers
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HelloRouter_1 = __importDefault(require("./HelloRouter"));
const UserRouter_1 = __importDefault(require("./UserRouter"));
const AuthRouter_1 = __importDefault(require("./AuthRouter"));
const loggers_1 = require("../utils/loggers");
const KataRouter_1 = __importDefault(require("./KataRouter"));
// instancia del server 
let server = (0, express_1.default)();
// instancia router
let rootRouter = express_1.default.Router();
//Activate for requests to /api
// GET /api
rootRouter.get('/', (req, res) => {
    (0, loggers_1.LogInfo)('GET: /api/');
    res.send("Root api, welcome @obelisk1996@gmail.com");
});
//redirection to router & controllers
server.use('/', rootRouter); // local/api/
server.use('/hello', HelloRouter_1.default); // local/api/hello  --> HelloRouter.ts
server.use('/users', UserRouter_1.default); // local/api/users  --> usersRouter.ts
server.use('/auth', AuthRouter_1.default); // local/api/auth --> authRouter.ts
server.use('/katas', KataRouter_1.default); // local/api/katas --> katasRouter.ts
exports.default = server;
//# sourceMappingURL=index.js.map