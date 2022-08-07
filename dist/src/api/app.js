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
const TypeOrmClient_1 = require("../database/TypeOrmClient");
const server_1 = require("./server");
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Init: connection of TypeOrm for api');
    yield (0, TypeOrmClient_1.createTypeOrmClientConnection)();
    console.log('Init: Server...');
    const server = new server_1.Server();
    server.listen();
}))();
