import { getDb } from "../connectDB/mongo";

interface HomeDate {
  name: string;
  location: string;
}

export const getHomeDatesCollection = async () => {
  const db = await getDb();
  return db.collection<HomeDate>("activities");
};

export const getHomeDates = async () => {
  const col = await getHomeDatesCollection();
  return col.find().toArray();
};
