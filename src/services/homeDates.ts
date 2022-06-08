import { getDb } from "../connectDB/mongo";

interface HomeDate {
  name: string;
  price: string;
  image: string;
  rating: 1 | 2 | 3 | 4 | 5;
  interactionLevel: 1 | 2 | 3;
  dressCode: string;
}

export const getHomeDatesCollection = async () => {
  const db = await getDb();
  return db.collection<HomeDate>("homedates");
};

export const getHomeDates = async () => {
  const col = await getHomeDatesCollection();
  return col.find().toArray();
};
