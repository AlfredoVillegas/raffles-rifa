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
exports.getNumbersTicketsSold = exports.getTicketsSold = exports.markTicket = void 0;
const TypeOrmClient_1 = require("../../database/TypeOrmClient");
const RaffleServices_1 = require("../Raffle/RaffleServices");
const TicketModel_1 = require("./TicketModel");
const repository = TypeOrmClient_1.AppDataSource.getRepository(TicketModel_1.Ticket);
function ticketNumberIsAvailable(numberTicket, raffleId) {
    return __awaiter(this, void 0, void 0, function* () {
        const ticket = yield repository.findOneBy({ raffleId, number: numberTicket });
        return ticket === null;
    });
}
function markTicket(newTicket, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, RaffleServices_1.verifyUserIsCreatorOrFail)(userId, newTicket.raffleId);
        const numberIsAvailable = yield ticketNumberIsAvailable(newTicket.number, newTicket.raffleId);
        if (!numberIsAvailable) {
            throw new Error('Ticket number not available');
        }
        const ticket = new TicketModel_1.Ticket(newTicket.competitorName, newTicket.competitorPhone, newTicket.number, newTicket.raffleId);
        const ticketFromDb = yield repository.save(ticket);
        return ticketFromDb;
    });
}
exports.markTicket = markTicket;
function getTicketsSold(raffleId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, RaffleServices_1.verifyUserIsCreatorOrFail)(userId, raffleId);
        const ticketsSold = yield repository.findBy({ raffleId });
        return ticketsSold;
    });
}
exports.getTicketsSold = getTicketsSold;
function getNumbersTicketsSold(raffleId) {
    return __awaiter(this, void 0, void 0, function* () {
        const ticketsSold = yield repository.findBy({ raffleId });
        const publicTicketsResponse = ticketsSold.map(ticket => ticket.number);
        return publicTicketsResponse;
    });
}
exports.getNumbersTicketsSold = getNumbersTicketsSold;
