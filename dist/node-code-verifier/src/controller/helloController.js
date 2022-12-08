"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = void 0;
const loggers_1 = require("../utils/loggers");
class HelloController {
    getMessage(name) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, loggers_1.LogSuccess)('[/api/hello] Get request');
            return {
                message: `Hello ${name || "world"}`
            };
        });
    }
}
exports.HelloController = HelloController;
//# sourceMappingURL=helloController.js.map