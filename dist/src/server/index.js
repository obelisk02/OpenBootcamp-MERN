"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Seguridad
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
// Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// Root routes
const routes_1 = __importDefault(require("../routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = (0, express_1.default)();
// * Swagger config and route
server.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
        explorer: true
    }
}));
//Define server to use '/api' and use rootRouter from 'index.ts' in routes
// de aqui la ruta locaslhost:3000/api/....
server.use('/api', routes_1.default);
//Static server (depsues de crear tsoa) 
server.use(express_1.default.static('public'));
// TODO: MONO mongoose
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect('mongodb://localhost:27017/codeverification');
mongoose_1.default.connection.on('connected', () => {
    console.log('connected');
    console.log(mongoose_1.default.connection.readyState); //logs 1
});
//Seguridad 
server.use((0, helmet_1.default)());
server.use((0, cors_1.default)());
//Content type config
server.use(express_1.default.urlencoded({
    extended: true,
    limit: '50mb'
}));
server.use(express_1.default.json({ limit: '50mb' }));
//Redireccionar locahost:3000 --> localhost:3000/api
server.get('/', (req, res) => {
    res.redirect('/api');
});
exports.default = server;
//# sourceMappingURL=index.js.map