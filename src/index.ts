import * as functions from "firebase-functions";
import cors from "cors";
import express from "express";
import { config } from "dotenv";
import { getActivites } from "./services/activites";
import { getEntertainments } from "./services/entertainments";
import { getRestaurant } from "./services/restaurants";
import { getHomeDates } from "./services/homeDates";
import {
  getDateSubmitForm,
  createDateSubmitForm,
} from "./services/dateSubmitForm";

config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://project-planned-date-frontend.web.app",
      "http://localhost:3000",
    ],
  })
);
//{origin: "http://localhost:3000",}

// Get Routes
app.get("/", async (req, res) => {
  res.send("Welcome To Plannedate !");
});

app.get("/activities", async (req, res) => {
  const activities = await getActivites();
  res.send(activities);
});

app.get("/entertainments", async (req, res) => {
  const entertainments = await getEntertainments();
  res.send(entertainments);
});

app.get("/restaurants", async (req, res) => {
  const restaurants = await getRestaurant();
  res.send(restaurants);
});

app.get("/homedates", async (req, res) => {
  const homedates = await getHomeDates();
  res.send(homedates);
});

app.get("/submitadate", async (req, res) => {
  const dateSubmitForm = await getDateSubmitForm();
  res.send(dateSubmitForm);
});

//Post route(s)
app.post("/submitadate", async (req, res) => {
  try {
    await createDateSubmitForm(req.body);
    res.send(200);
  } catch (e) {
    res.status(400).send({
      message: "Form not submitted ",
    });
  }
});

export const api = functions.https.onRequest(app);
