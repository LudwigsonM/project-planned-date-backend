import { getDb } from "../connectDB/mongo";

interface Restaurant {
  name: string;
  location: string;
  price: string;
  image: string;
  rating: 1 | 2 | 3 | 4 | 5;
  interactionLevel: 1 | 2 | 3;
  dressCode: string;
}

export const getRestaurantsCollection = async () => {
  const db = await getDb();
  return db.collection<Restaurant>("restaurants");
};

export const getRestaurant = async () => {
  const col = await getRestaurantsCollection();
  return col.find().toArray();
};
