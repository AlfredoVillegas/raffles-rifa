"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckApiEdpoints = void 0;
const CheckApiEdpoints = (app) => {
    app.get('/api', (req, res) => {
        return res.status(200).send('OK');
    });
};
exports.CheckApiEdpoints = CheckApiEdpoints;
