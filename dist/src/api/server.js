"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importStar(require("express"));
const path_1 = __importDefault(require("path"));
const raffles_route_1 = require("../modules/Raffle/raffles.route");
const tickets_route_1 = require("../modules/Ticket/tickets.route");
const user_route_1 = require("../modules/User/user.route");
const CheckApiEndpoint_1 = require("./CheckApiEndpoint");
class Server {
    constructor() {
        this.apiPath = '/api';
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.initRoutes();
        this.initSubscribers();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initRoutes() {
        (0, CheckApiEndpoint_1.CheckApiEdpoints)(this.app);
        const router = (0, express_1.Router)();
        this.app.use('/api', router);
        (0, user_route_1.registerUserRoutes)(router);
        (0, raffles_route_1.registerRefflesRoutes)(router);
        (0, tickets_route_1.registerTicketsRoutes)(router);
        // Middleware para Vue.js router modo history
        const history = require('connect-history-api-fallback');
        this.app.use(history());
        console.log(path_1.default.join(__dirname, 'public'), 'paaaaaaaaaaaaaat');
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    initSubscribers() { }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(this.port, () => {
                console.log(` App is running at http://localhost:${this.port}${this.apiPath} `);
                console.log(' Press CTRL-C to stop\n');
            });
        });
    }
}
exports.Server = Server;
