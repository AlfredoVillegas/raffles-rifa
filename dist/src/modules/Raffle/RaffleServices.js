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
exports.verifyUserIsCreatorOrFail = exports.getRafflesByUser = exports.getRaffle = exports.createRaffle = void 0;
const TypeOrmClient_1 = require("../../database/TypeOrmClient");
const RaffleModel_1 = require("./RaffleModel");
const repository = TypeOrmClient_1.AppDataSource.getRepository(RaffleModel_1.Raffle);
function createRaffle(newRaffle) {
    return __awaiter(this, void 0, void 0, function* () {
        const createdAt = new Date();
        const raffle = new RaffleModel_1.Raffle(newRaffle.name, newRaffle.description, createdAt, new Date(newRaffle.drawDate), newRaffle.totalTickets, newRaffle.userId);
        return yield repository.save(raffle);
    });
}
exports.createRaffle = createRaffle;
function getRaffle(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const raffle = yield repository.findOneBy({ id });
        if (!raffle)
            throw new Error('Raffle not exists');
        return raffle;
    });
}
exports.getRaffle = getRaffle;
function getRafflesByUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const raffles = yield repository.findBy({ userId });
        if (!raffles[0])
            throw new Error('Raffles not founds');
        return raffles;
    });
}
exports.getRafflesByUser = getRafflesByUser;
function verifyUserIsCreatorOrFail(userId, raffleId) {
    return __awaiter(this, void 0, void 0, function* () {
        const raffle = yield getRaffle(raffleId);
        const userIsCreator = userId === raffle.userId;
        if (!userIsCreator) {
            throw new Error('user not have permision');
        }
        return true;
    });
}
exports.verifyUserIsCreatorOrFail = verifyUserIsCreatorOrFail;
