import { getDb } from "../connectDB/mongo";

interface Activity {
  name: string;
  location: string;
  price: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export const getActivitesCollection = async () => {
  const db = await getDb();
  return db.collection<Activity>("activities");
};

export const getActivites = async () => {
  const col = await getActivitesCollection();
  return col.find().toArray();
};
