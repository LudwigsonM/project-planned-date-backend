import cors from "cors";
import express from "express";
import { config } from "dotenv";
import { getActivites } from "./services/activites";
import { getEntertainments } from "./services/entertainments";
import { getRestaurant } from "./services/restaurants";
import { getHomeDates } from "./services/homeDates";

config();

const app = express();
app.use(express.json());
app.use(cors());

// Get Routes

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

app.listen(3000, () => {
  console.log("Listening on https://localhost:3000");
});
