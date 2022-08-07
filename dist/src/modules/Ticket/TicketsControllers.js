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
exports.numbersTicketsSoldGetController = exports.ticketsSoldGetController = exports.ticketsPostController = void 0;
const response_1 = require("../../api/shared/network/response");
const TicketServices_1 = require("./TicketServices");
function ticketsPostController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { competitorName, competitorPhone, number, raffleId } = req.body;
        const userId = req.user;
        try {
            const ticket = yield (0, TicketServices_1.markTicket)({ competitorName, competitorPhone, number, raffleId }, userId);
            (0, response_1.responseSuccess)(res, 201, ticket);
        }
        catch (error) {
            (0, response_1.responseError)(res, 400, error.message);
        }
    });
}
exports.ticketsPostController = ticketsPostController;
function ticketsSoldGetController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const raffleId = Number(req.params.raffleId);
        const userId = req.user;
        try {
            const tickets = yield (0, TicketServices_1.getTicketsSold)(raffleId, userId);
            (0, response_1.responseSuccess)(res, 200, tickets);
        }
        catch (error) {
            (0, response_1.responseError)(res, 400, error.message);
        }
    });
}
exports.ticketsSoldGetController = ticketsSoldGetController;
function numbersTicketsSoldGetController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const raffleId = Number(req.params.raffleId);
        try {
            const numbersTickets = yield (0, TicketServices_1.getNumbersTicketsSold)(raffleId);
            (0, response_1.responseSuccess)(res, 200, numbersTickets);
        }
        catch (error) {
            (0, response_1.responseError)(res, 400, error.message);
        }
    });
}
exports.numbersTicketsSoldGetController = numbersTicketsSoldGetController;
