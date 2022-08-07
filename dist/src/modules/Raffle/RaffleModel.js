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
exports.Raffle = void 0;
const typeorm_1 = require("typeorm");
let Raffle = class Raffle {
    constructor(name, description, createdAt, drawDate, totalTickets, userId) {
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.drawDate = drawDate;
        this.totalTickets = totalTickets;
        this.userId = userId;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Raffle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Raffle.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Raffle.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Raffle.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'draw_date' }),
    __metadata("design:type", Date)
], Raffle.prototype, "drawDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", Number)
], Raffle.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_tickets' }),
    __metadata("design:type", Number)
], Raffle.prototype, "totalTickets", void 0);
Raffle = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, Date,
        Date, Number, Number])
], Raffle);
exports.Raffle = Raffle;
