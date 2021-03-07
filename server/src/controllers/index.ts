import { Express } from "express";
import * as root from "./root";

export const register = (app: Express) => {
  root.register(app);
};
