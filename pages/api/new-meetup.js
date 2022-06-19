import { MongoClient } from "mongodb";
import { mongoUser, mongoPassword } from "./mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.gdiyk.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted!" }); // 201 something insert successfully
  }
}

export default handler;
