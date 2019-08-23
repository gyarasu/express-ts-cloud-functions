import { login } from './login';
import * as Express from "express";

interface IRotues {
  name: string;
  router: Express.Router;
}


export const auth: IRotues[] = [
  login,
];
