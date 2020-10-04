import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method === "POST") {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(_req);
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(_req);
  }
};

export default handler;
