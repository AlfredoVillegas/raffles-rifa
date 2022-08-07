"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseError = exports.responseSuccess = void 0;
function responseSuccess(res, status, dataBody) {
    const statusCode = status || 200;
    const data = dataBody || '';
    res.status(statusCode).json({
        error: false,
        status: statusCode,
        data: data
    });
}
exports.responseSuccess = responseSuccess;
function responseError(res, status, message) {
    const statusCode = status || 500;
    const mesaggeError = message || 'Internal server error';
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        message: mesaggeError
    });
}
exports.responseError = responseError;
