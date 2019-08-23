import * as Express from "express";
import { userinfo } from './userinfo';

interface IRotues {
  key: string;
  router: Express.Router;
}

export const sample: IRotues[] = [
  {
    key: 'sampleUserinfo',
    router: userinfo
  },
];
