"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configEnv = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.configEnv = {
    secretKey: process.env.SECRET_KEY || 'dev'
};
