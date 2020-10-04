import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method === "POST") {
    res.status(200).json("ok post");
  } else {
    res.status(200).json("ok");
  }
};

export default handler;
