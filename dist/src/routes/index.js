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
const loggers_1 = require("../utils/loggers");
// instancia del server 
let server = (0, express_1.default)();
// instancia router
let rootRouter = express_1.default.Router();
//Activate for requests to /api
// GET /api
rootRouter.get('/', (req, res) => {
    (0, loggers_1.LogInfo)('GET: /api/');
    res.send("Root api, welcome");
});
//redirection to router & controllers
server.use('/', rootRouter); // local/api/
server.use('/hello', HelloRouter_1.default); // local/api/hello  --> HelloRouter.ts
server.use('/users', UserRouter_1.default); // local/api/users  --> usersRouter.ts
exports.default = server;
//# sourceMappingURL=index.js.map