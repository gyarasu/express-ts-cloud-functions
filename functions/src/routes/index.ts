import { sample } from './sample';
import { auth } from './auth';

interface IRotues {
  [key: string]: any; // TODO: avoid any
}

export const routes: IRotues = {
  sample,
  auth,
};
