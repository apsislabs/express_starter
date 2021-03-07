import { Express, Request, Response } from "express";

export const register = (app: Express) => {
  app.get("/", index);
};

const index = async (req: Request, res: Response) => {
  res.status(200).send("welcome to our express starter!");
};
