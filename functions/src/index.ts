import * as Express from 'express';
import { routes } from './routes';
import * as functions from 'firebase-functions';

const app = Express();

// API routes
const routeKeys:string[] = Object.keys(routes);

for (let i:number = 0; i < routeKeys.length; i += 1) {
  app.use(routes[routeKeys[i]]);
}

exports.app = functions.https.onRequest(app);
