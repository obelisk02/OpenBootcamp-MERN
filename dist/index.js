"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loggers_1 = require("./src/utils/loggers");
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./src/server/index"));
const loggers_2 = require("./src/utils/loggers");
dotenv_1.default.config();
const port = process.env.PORT || 3000;
//Run server
index_1.default.listen(port, () => {
    (0, loggers_1.LogSuccess)(`[SERVER ON]: Runnin on port ${port}`);
});
//Server error?
index_1.default.on('error', (error) => {
    (0, loggers_2.LogError)(`[SERVER ERROR]: ${error}`);
});
//# sourceMappingURL=index.js.map