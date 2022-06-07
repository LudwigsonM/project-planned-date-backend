import { getDb } from "../connectDB/mongo";

interface Entertainment {
  name: string;
  location: string;
}

export const getEntertainmentsCollection = async () => {
  const db = await getDb();
  return db.collection<Entertainment>("entertainments");
};

export const getEntertainments = async () => {
  const col = await getEntertainmentsCollection();
  return col.find().toArray();
};
