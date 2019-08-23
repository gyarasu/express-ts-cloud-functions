import * as Express from "express";
import { login } from './login';

interface IRotues {
  key: string;
  router: Express.Router;
}

export const auth: IRotues[] = [
  {
    key: 'authLogin',
    router: login
  },
];
