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
exports.rafflesByUserGetController = exports.raffleGetController = exports.rafflePostController = void 0;
const response_1 = require("../../api/shared/network/response");
const RaffleServices_1 = require("./RaffleServices");
function rafflePostController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, description, drawDate, totalTickets } = req.body;
        const userId = req.user;
        try {
            const raffle = yield (0, RaffleServices_1.createRaffle)({ name, description, drawDate, totalTickets, userId });
            (0, response_1.responseSuccess)(res, 201, raffle);
        }
        catch (error) {
            (0, response_1.responseError)(res, 400, error.message);
        }
    });
}
exports.rafflePostController = rafflePostController;
function raffleGetController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const raffleId = Number(req.params.id);
        try {
            const raffle = yield (0, RaffleServices_1.getRaffle)(raffleId);
            (0, response_1.responseSuccess)(res, 200, raffle);
        }
        catch (error) {
            (0, response_1.responseError)(res, 404, error.message);
        }
    });
}
exports.raffleGetController = raffleGetController;
function rafflesByUserGetController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        try {
            const raffles = yield (0, RaffleServices_1.getRafflesByUser)(userId);
            (0, response_1.responseSuccess)(res, 200, raffles);
        }
        catch (error) {
            (0, response_1.responseError)(res, 404, error.message);
        }
    });
}
exports.rafflesByUserGetController = rafflesByUserGetController;
