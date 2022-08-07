"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerTicketsRoutes = void 0;
const VerifyAuthToken_1 = require("../../api/shared/middelwares/VerifyAuthToken");
const TicketsControllers_1 = require("./TicketsControllers");
function registerTicketsRoutes(router) {
    //router.use('/tickets', verifyAuthToken);
    router.post('/tickets', VerifyAuthToken_1.verifyAuthToken, TicketsControllers_1.ticketsPostController);
    router.get('/tickets/:raffleId', VerifyAuthToken_1.verifyAuthToken, TicketsControllers_1.ticketsSoldGetController);
    router.get('/tickets/public/:raffleId', TicketsControllers_1.numbersTicketsSoldGetController);
}
exports.registerTicketsRoutes = registerTicketsRoutes;
