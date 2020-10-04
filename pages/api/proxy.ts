import { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  // Run the middleware
  await runMiddleware(_req, res, cors);

  if (_req.method === "POST") {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ status: 200, message: "post ok" });
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ status: 200, message: "get ok" });
  }
};

export default handler;
