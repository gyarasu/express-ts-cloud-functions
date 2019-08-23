import * as Express from "express";
import { sample } from "./sample";
import { auth } from "./auth";

interface IRotues {
  [key: string]: Express.Router;
}

export const routes: IRotues = {
  sample,
  auth
};
