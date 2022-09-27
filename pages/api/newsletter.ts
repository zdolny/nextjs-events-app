import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

interface Data {
  message: string;
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.texpbg0.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db("newsletter");
    await db.collection("emails").insertOne({ email: userEmail });
    client.close();

    res.status(201).json({ message: `${userEmail} signed up.` });
  }
};
