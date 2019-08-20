import * as Express from 'express';
import { routes } from './routes';
import { cors } from './middleware/cors';
import * as functions from 'firebase-functions';


const app = Express();


// add middleware
app.use(cors);

// API routes
const routeKeys:string[] = Object.keys(routes);
routeKeys.forEach((name) => {
  app.use(routes[name]);
});

exports.app = functions.https.onRequest(app);
