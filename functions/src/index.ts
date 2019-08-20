import * as Express from 'express';
import { routes } from './routes';
import { cors } from './middleware/cors';
import * as functions from 'firebase-functions';


const app = Express();


// add middleware
app.use(cors);

// API routes
const routeKeys:string[] = Object.keys(routes);

for (let i:number = 0; i < routeKeys.length; i += 1) {
  app.use(routes[routeKeys[i]]);
}

exports.app = functions.https.onRequest(app);
