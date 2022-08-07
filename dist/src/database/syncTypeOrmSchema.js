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
const TypeOrmClient_1 = require("./TypeOrmClient");
function syncTypeOrmSchema() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = (0, TypeOrmClient_1.getDataBaseConfig)();
        yield (0, TypeOrmClient_1.createTypeOrmClientConnection)();
        TypeOrmClient_1.AppDataSource.synchronize();
        yield TypeOrmClient_1.AppDataSource.destroy();
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield syncTypeOrmSchema();
}))();