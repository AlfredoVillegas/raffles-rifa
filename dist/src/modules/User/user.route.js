"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserRoutes = void 0;
const VerifyAuthToken_1 = require("../../api/shared/middelwares/VerifyAuthToken");
const UserControllers_1 = require("./UserControllers");
function registerUserRoutes(router) {
    router.post('/users', UserControllers_1.registerUserController);
    router.post('/users/login', UserControllers_1.loginUserController);
    router.get('/users/me', VerifyAuthToken_1.verifyAuthToken, UserControllers_1.userGetController);
}
exports.registerUserRoutes = registerUserRoutes;
