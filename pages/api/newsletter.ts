import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message: string;
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    res.status(201).json({ message: `${userEmail} signed up.` });
  }
};
