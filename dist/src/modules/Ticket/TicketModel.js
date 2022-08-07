"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const typeorm_1 = require("typeorm");
let Ticket = class Ticket {
    constructor(competitorName, competitorPhone, number, raffleId) {
        this.competitorName = competitorName;
        this.competitorPhone = competitorPhone;
        this.number = number;
        this.raffleId = raffleId;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ticket.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'competitor_name' }),
    __metadata("design:type", String)
], Ticket.prototype, "competitorName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'competitor_phone' }),
    __metadata("design:type", String)
], Ticket.prototype, "competitorPhone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ticket.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'raffle_id' }),
    __metadata("design:type", Number)
], Ticket.prototype, "raffleId", void 0);
Ticket = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, Number, Number])
], Ticket);
exports.Ticket = Ticket;
