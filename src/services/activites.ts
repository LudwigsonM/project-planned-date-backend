import { getDb } from "../connectDB/mongo";

interface Activity {
  name: string;
  location: string;
  price: string;
  image: string;
  rating: 1 | 2 | 3 | 4 | 5;
  interactionLevel: 1 | 2 | 3;
  dressCode: string;
}

export const getActivitesCollection = async () => {
  const db = await getDb();
  return db.collection<Activity>("activities");
};

export const getActivites = async () => {
  const col = await getActivitesCollection();
  return col.find().toArray();
};
