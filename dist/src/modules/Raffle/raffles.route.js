"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRefflesRoutes = void 0;
const VerifyAuthToken_1 = require("../../api/shared/middelwares/VerifyAuthToken");
const RaffleControllers_1 = require("./RaffleControllers");
function registerRefflesRoutes(router) {
    router.get('/raffles/:id', RaffleControllers_1.raffleGetController);
    router.use('/raffles', VerifyAuthToken_1.verifyAuthToken);
    router.post('/raffles', RaffleControllers_1.rafflePostController);
    router.get('/raffles', RaffleControllers_1.rafflesByUserGetController);
}
exports.registerRefflesRoutes = registerRefflesRoutes;
