import { getDb } from "../connectDB/mongo";

interface Entertainment {
  name: string;
  location: string;
  price: string;
  image: string;
  rating: 1 | 2 | 3 | 4 | 5;
  interactionLevel: 1 | 2 | 3;
  dressCode: string;
}

export const getEntertainmentsCollection = async () => {
  const db = await getDb();
  return db.collection<Entertainment>("entertainments");
};

export const getEntertainments = async () => {
  const col = await getEntertainmentsCollection();
  return col.find().toArray();
};
