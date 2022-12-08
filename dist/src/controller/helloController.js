"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = void 0;
const tsoa_1 = require("tsoa");
let HelloController = class HelloController {
    //**
    *Endpoint() { }
    *() { }
};
__decorate([
    param,
    __metadata("design:type", Object)
], HelloController.prototype, "", void 0);
HelloController = __decorate([
    (0, tsoa_1.Route)("/api/hello") //comentar con tsoa 
    ,
    (0, tsoa_1.Tags)("HelloController")
], HelloController);
exports.HelloController = HelloController;
{
    string | undefined;
}
Name;
user;
to;
be;
saludado
    * ;
{
    BasicResponse;
}
Promise;
basicresponse
    * /;
getMessage(name ?  : string | undefined);
Promise < BasicResponse > {
    return: {
        message: `Hello ${name || "world"}`
    }
};
//# sourceMappingURL=helloController.js.map