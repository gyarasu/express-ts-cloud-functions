import { sample } from "./sample";
import { auth } from "./auth";
import * as Express from "express";

interface IRotues {
  key: string;
  router: Express.Router;
}

const baseArray: IRotues[] = [];

export const routes = baseArray.concat(
  sample,
  auth,
);
