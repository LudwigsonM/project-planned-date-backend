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
exports.getRestaurant = exports.getRestaurantsCollection = void 0;
const mongo_1 = require("../connectDB/mongo");
const getRestaurantsCollection = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, mongo_1.getDb)();
    return db.collection("restaurants");
});
exports.getRestaurantsCollection = getRestaurantsCollection;
const getRestaurant = () => __awaiter(void 0, void 0, void 0, function* () {
    const col = yield (0, exports.getRestaurantsCollection)();
    return col.find().toArray();
});
exports.getRestaurant = getRestaurant;
