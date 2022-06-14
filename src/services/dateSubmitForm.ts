import { getDb } from "../connectDB/mongo";

interface DateSubmitForm {
  name: string;
  location: string;
  price: string;
  image: string;
  rating: 1 | 2 | 3 | 4 | 5;
  interactionLevel: 1 | 2 | 3;
  dressCode: string;
}

export const getDateSubmitFormCollection = async () => {
  const db = await getDb();
  return db.collection<DateSubmitForm>("datesubmitform");
};

export const createDateSubmitForm = async (dateSubmitForm: DateSubmitForm) => {
  const col = await getDateSubmitFormCollection();
  if (!dateSubmitForm) {
    throw new Error("Date Submit is not possible");
  }
  const { insertedId } = await col.insertOne(dateSubmitForm);
  return insertedId.toString();
};
