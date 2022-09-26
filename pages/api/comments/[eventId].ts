import type { NextApiRequest, NextApiResponse } from "next";

interface Comment {
  id: string;
  email?: string;
  name: string;
  text: string;
}

interface Data {
  message?: string;
  comment?: Comment;
  comments?: Comment[];
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    res.status(201).json({ message: "Added comment.", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Mike", text: "A first comment!" },
      { id: "c2", name: "Max", text: "A second comment!" },
    ];

    res.status(201).json({ comments: dummyList });
  }
};
