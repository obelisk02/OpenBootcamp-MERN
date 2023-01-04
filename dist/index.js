/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst loggers_1 = __webpack_require__(/*! ./src/utils/loggers */ \"./src/utils/loggers.ts\");\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nconst index_1 = __importDefault(__webpack_require__(/*! ./src/server/index */ \"./src/server/index.ts\"));\r\nconst loggers_2 = __webpack_require__(/*! ./src/utils/loggers */ \"./src/utils/loggers.ts\");\r\ndotenv_1.default.config();\r\nconst port = process.env.PORT || 3000;\r\n//Run server\r\nindex_1.default.listen(port, () => {\r\n    (0, loggers_1.LogSuccess)(`[SERVER ON]: Runnin on port ${port}`);\r\n});\r\n//Server error?\r\nindex_1.default.on('error', (error) => {\r\n    (0, loggers_2.LogError)(`[SERVER ERROR]: ${error}`);\r\n});\r\n\n\n//# sourceURL=webpack://code-verifier/./index.ts?");

/***/ }),

/***/ "./src/controller/helloController.ts":
/*!*******************************************!*\
  !*** ./src/controller/helloController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.HelloController = void 0;\r\nconst tsoa_1 = __webpack_require__(/*! tsoa */ \"tsoa\");\r\nconst loggers_1 = __webpack_require__(/*! ../utils/loggers */ \"./src/utils/loggers.ts\");\r\nlet HelloController = class HelloController {\r\n    /*\r\n     * Endpoint to retrieve a message \"Hello {name}\" in JSON\r\n     * @param {string | undefined} Name user to be saludado\r\n     * @returns   {BasicResponse} Promise basicresponse\r\n     */\r\n    getMessage(name) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            (0, loggers_1.LogSuccess)('[/api/hello] Get request');\r\n            return {\r\n                message: `Hello ${name || \"world\"}`\r\n            };\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    (0, tsoa_1.Get)(\"/\"),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], HelloController.prototype, \"getMessage\", null);\r\nHelloController = __decorate([\r\n    (0, tsoa_1.Route)(\"/api/hello\") //comentar con tsoa \r\n    ,\r\n    (0, tsoa_1.Tags)(\"HelloController\")\r\n], HelloController);\r\nexports.HelloController = HelloController;\r\n\n\n//# sourceURL=webpack://code-verifier/./src/controller/helloController.ts?");

/***/ }),

/***/ "./src/routes/HelloRouter.ts":
/*!***********************************!*\
  !*** ./src/routes/HelloRouter.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst helloController_1 = __webpack_require__(/*! ../controller/helloController */ \"./src/controller/helloController.ts\");\r\nconst loggers_1 = __webpack_require__(/*! ../utils/loggers */ \"./src/utils/loggers.ts\");\r\n//Router from express\r\nlet helloRouter = express_1.default.Router();\r\n// GET -> http:localhost:3000/api/hello?name=Pepe\r\nhelloRouter.route('/')\r\n    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    var _a;\r\n    let name = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.name;\r\n    (0, loggers_1.LogInfo)(`QueryParam: ${name}`);\r\n    //Controller Instance to execute method\r\n    const controller = new helloController_1.HelloController();\r\n    //obtain response\r\n    const response = yield controller.getMessage(name);\r\n    //send res to client\r\n    return res.send(response);\r\n}));\r\nexports[\"default\"] = helloRouter;\r\n\n\n//# sourceURL=webpack://code-verifier/./src/routes/HelloRouter.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\n/**\r\n * Root router\r\n * REdirector to routers\r\n */\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst HelloRouter_1 = __importDefault(__webpack_require__(/*! ./HelloRouter */ \"./src/routes/HelloRouter.ts\"));\r\nconst loggers_1 = __webpack_require__(/*! ../utils/loggers */ \"./src/utils/loggers.ts\");\r\n// instancia del server \r\nlet server = (0, express_1.default)();\r\n// instancia router\r\nlet rootRouter = express_1.default.Router();\r\n//Activate for requests to /api\r\n// GET /api\r\nrootRouter.get('/', (req, res) => {\r\n    (0, loggers_1.LogInfo)('GET: /api/');\r\n    res.send(\"Root api, welcome\");\r\n});\r\n//redirection to router & controllers\r\nserver.use('/', rootRouter); // local/api/\r\nserver.use('/hello', HelloRouter_1.default); // local/api/hello  --> HelloRouter.ts\r\nexports[\"default\"] = server;\r\n\n\n//# sourceURL=webpack://code-verifier/./src/routes/index.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\n// Seguridad\r\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\n// TODO: HTTPS\r\n// Root routes\r\nconst routes_1 = __importDefault(__webpack_require__(/*! ../routes */ \"./src/routes/index.ts\"));\r\nconst server = (0, express_1.default)();\r\n//Define server to use '/api' and use rootRouter from 'index.ts' in routes\r\n// de aqui la ruta locaslhost:3000/api/....\r\nserver.use('/api', routes_1.default);\r\n//Static server (depsues de crear tsoa) \r\nserver.use(express_1.default.static('public'));\r\n// TODO: MONO mongoose\r\n//Seguridad \r\nserver.use((0, helmet_1.default)());\r\nserver.use((0, cors_1.default)());\r\n//Content type config\r\nserver.use(express_1.default.urlencoded({\r\n    extended: true,\r\n    limit: '50mb'\r\n}));\r\nserver.use(express_1.default.json({ limit: '50mb' }));\r\n//Redireccionar locahost:3000 --> localhost:3000/api\r\nserver.get('/', (req, res) => {\r\n    res.redirect('/api');\r\n});\r\nexports[\"default\"] = server;\r\n\n\n//# sourceURL=webpack://code-verifier/./src/server/index.ts?");

/***/ }),

/***/ "./src/utils/loggers.ts":
/*!******************************!*\
  !*** ./src/utils/loggers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.LogError = exports.LogWarning = exports.LogSuccess = exports.LogInfo = void 0;\r\nconst LogInfo = (message) => {\r\n    console.log(`Info: ${message}`);\r\n};\r\nexports.LogInfo = LogInfo;\r\nconst LogSuccess = (message) => {\r\n    console.log(`Success: ${message}`);\r\n};\r\nexports.LogSuccess = LogSuccess;\r\nconst LogWarning = (message) => {\r\n    console.log(`Warning: ${message}`);\r\n};\r\nexports.LogWarning = LogWarning;\r\nconst LogError = (message) => {\r\n    console.log(`Error: ${message}`);\r\n};\r\nexports.LogError = LogError;\r\n\n\n//# sourceURL=webpack://code-verifier/./src/utils/loggers.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "tsoa":
/*!***********************!*\
  !*** external "tsoa" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("tsoa");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;