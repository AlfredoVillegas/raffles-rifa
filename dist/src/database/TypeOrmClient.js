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
exports.getDataBaseConfig = exports.createTypeOrmClientConnection = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const typeOrmConfig_1 = require("./typeOrmConfig");
exports.AppDataSource = new typeorm_1.DataSource(getDataBaseConfig());
function createTypeOrmClientConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.AppDataSource.initialize();
            console.log('Data Source has been initialized!');
            console.log(getDataBaseConfig().entities, 'entiiteeeeeessss');
            console.log(getDataBaseConfig().database, 'entiiteeeeeessss');
        }
        catch (error) {
            console.error('Error during Data Source initialization', error);
            throw new Error('Error during Data Source initialization');
        }
    });
}
exports.createTypeOrmClientConnection = createTypeOrmClientConnection;
function getDataBaseConfig() {
    if (process.env.NODE_ENV === 'production') {
        const productionConnection = {
            type: 'postgres',
            host: typeOrmConfig_1.postgresConfig.host,
            port: typeOrmConfig_1.postgresConfig.port,
            username: typeOrmConfig_1.postgresConfig.username,
            password: typeOrmConfig_1.postgresConfig.password,
            database: typeOrmConfig_1.postgresConfig.database,
            //entities: [`${__dirname}/../../../../**/**/infrastructure/persistence/typeorm/*{.js,.ts}`],
            ssl: {
                rejectUnauthorized: false
            }
            //synchronize: true,
            //logging: true
        };
        return productionConnection;
    }
    const devConnection = {
        type: 'better-sqlite3',
        database: `${__dirname}/../../project.sql`,
        entities: [`${__dirname}/../../src/modules/**/*{.js,.ts}`],
        logging: true,
        synchronize: true
    };
    return devConnection;
}
exports.getDataBaseConfig = getDataBaseConfig;
