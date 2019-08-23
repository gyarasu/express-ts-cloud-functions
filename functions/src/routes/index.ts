import { sample } from './sample';
import { auth } from './auth';
import { IRoutes } from '../interfaces';

const baseArray: IRoutes[] = [];

export const routes = baseArray.concat(sample, auth);
