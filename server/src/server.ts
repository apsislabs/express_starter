import pinohttp from "pino-http";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import { register } from "./controllers";
import { log } from "./logger";

export const createServer = () => {
  const app = express();
  app.use(pinohttp({ logger: log, genReqId: () => uuidv4() }));

  app.get("/", async (req, res) => {
    res.status(200).send("Welcome to the express starter!");
  });
  register(app);

  return app;
};
