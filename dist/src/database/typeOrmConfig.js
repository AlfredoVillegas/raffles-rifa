"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.postgresConfig = {
    host: process.env.POSTGRES_HOST || '',
    port: Number(process.env.POSTGRES_PORT) || 0,
    username: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_DATA_BASE || ''
};
