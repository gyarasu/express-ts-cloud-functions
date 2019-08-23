import * as Express from "express";
import { userinfo } from './userinfo';

interface IRotues {
  name: string;
  router: Express.Router;
}

export const sample: IRotues[] = [
  userinfo,
];
