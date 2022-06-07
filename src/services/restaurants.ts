import { getDb } from "../connectDB/mongo";

interface Restaurant {
  name: string;
  location: string;
}

export const getRestaurantsCollection = async () => {
  const db = await getDb();
  return db.collection<Restaurant>("entertainments");
};

export const getRestaurant = async () => {
  const col = await getRestaurantsCollection();
  return col.find().toArray();
};
