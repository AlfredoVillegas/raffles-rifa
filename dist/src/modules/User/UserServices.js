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
exports.getUser = exports.loginUser = exports.registerUser = void 0;
const TypeOrmClient_1 = require("../../database/TypeOrmClient");
const passwordEncoderServices_1 = require("./passwordEncoderServices");
const UserModel_1 = require("./UserModel");
const repository = TypeOrmClient_1.AppDataSource.getRepository(UserModel_1.User);
function registerUser(newUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const passwordHash = yield (0, passwordEncoderServices_1.encryptPassword)(newUser.password);
        const user = new UserModel_1.User(newUser.name, newUser.phone, newUser.email, passwordHash);
        const userFromDb = yield repository.save(user);
        return userFromDb.toResponseSecure();
    });
}
exports.registerUser = registerUser;
function loginUser(authUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const userFromDb = yield repository.findOneBy({ email: authUser.email });
        if (!userFromDb)
            throw new Error('User not registered');
        const authUserIsValid = yield (0, passwordEncoderServices_1.verifyPassword)(authUser.password, userFromDb.password);
        if (!authUserIsValid)
            throw new Error('email or password invalid');
        return userFromDb.toResponseSecure();
    });
}
exports.loginUser = loginUser;
function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield repository.findOneBy({ id });
        if (!user)
            throw new Error('User not exist');
        return user.toResponseSecure();
    });
}
exports.getUser = getUser;
