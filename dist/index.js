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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const firebase_functions_1 = __importDefault(require("firebase-functions"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const activites_1 = require("./services/activites");
const entertainments_1 = require("./services/entertainments");
const restaurants_1 = require("./services/restaurants");
const homeDates_1 = require("./services/homeDates");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Get Routes
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Welcome To Plannedate !");
}));
app.get("/activities", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const activities = yield (0, activites_1.getActivites)();
    res.send(activities);
}));
app.get("/entertainments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const entertainments = yield (0, entertainments_1.getEntertainments)();
    res.send(entertainments);
}));
app.get("/restaurants", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurants = yield (0, restaurants_1.getRestaurant)();
    res.send(restaurants);
}));
app.get("/homedates", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const homedates = yield (0, homeDates_1.getHomeDates)();
    res.send(homedates);
}));
exports.api = firebase_functions_1.default.https.onRequest(app);
