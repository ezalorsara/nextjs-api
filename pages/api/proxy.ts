import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method === "POST") {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ status: 200, message: "post ok" });
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ status: 200, message: "get ok" });
  }
};

export default handler;
