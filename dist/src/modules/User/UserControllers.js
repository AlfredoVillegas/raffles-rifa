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
exports.userGetController = exports.loginUserController = exports.registerUserController = void 0;
const response_1 = require("../../api/shared/network/response");
const tokenServices_1 = require("./tokenServices");
const UserServices_1 = require("./UserServices");
function registerUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, phone, password } = req.body;
        try {
            const newUser = yield (0, UserServices_1.registerUser)({ name, email, phone, password });
            const accessToken = (0, tokenServices_1.createToken)(newUser);
            (0, response_1.responseSuccess)(res, 201, { user: newUser, accessToken });
        }
        catch (error) {
            (0, response_1.responseError)(res, 400, error.message);
        }
    });
}
exports.registerUserController = registerUserController;
function loginUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const user = yield (0, UserServices_1.loginUser)({ email, password });
            const accessToken = (0, tokenServices_1.createToken)(user);
            (0, response_1.responseSuccess)(res, 200, { user, accessToken });
        }
        catch (error) {
            (0, response_1.responseError)(res, 403, error.message);
        }
    });
}
exports.loginUserController = loginUserController;
function userGetController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user;
        try {
            const user = yield (0, UserServices_1.getUser)(userId);
            (0, response_1.responseSuccess)(res, 200, user);
        }
        catch (error) {
            (0, response_1.responseError)(res, 400, error.message);
        }
    });
}
exports.userGetController = userGetController;
