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
exports.remove = exports.updateOne = exports.create = exports.findOne = exports.findAll = void 0;
const service_1 = require("./service");
const error_1 = require("../../config/error");
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function findAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categorieProducts = yield service_1.default.findAll();
            res.status(200).json(categorieProducts);
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.findAll = findAll;
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function findOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categorieProduct = yield service_1.default.findOne(req.params.id);
            res.status(200).json(categorieProduct);
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.findOne = findOne;
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categorieProduct = yield service_1.default.insert(req.body);
            res.status(201).json(categorieProduct);
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.create = create;
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function updateOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const categorieProduct = yield service_1.default.updateOne(req.body, id);
            if (categorieProduct) {
                res.status(201).json(categorieProduct);
            }
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.updateOne = updateOne;
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function remove(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categorieProduct = yield service_1.default.remove(req.params.id);
            res.status(200).json(categorieProduct);
        }
        catch (error) {
            next(new error_1.HttpError(error.message.status, error.message));
        }
    });
}
exports.remove = remove;
//# sourceMappingURL=index.js.map