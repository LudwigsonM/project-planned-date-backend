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
exports.getHomeDates = exports.getHomeDatesCollection = void 0;
const mongo_1 = require("../connectDB/mongo");
const getHomeDatesCollection = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, mongo_1.getDb)();
    return db.collection("homedates");
});
exports.getHomeDatesCollection = getHomeDatesCollection;
const getHomeDates = () => __awaiter(void 0, void 0, void 0, function* () {
    const col = yield (0, exports.getHomeDatesCollection)();
    return col.find().toArray();
});
exports.getHomeDates = getHomeDates;