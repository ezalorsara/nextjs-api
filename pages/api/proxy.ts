import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method === "POST") {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ content: "post ok" });
  } else {
    res.status(200).json({ content: "get ok" });
  }
};

export default handler;
