import * as Express from 'express';
import { routes } from './routes';
import { cors } from './middleware/cors';
import { initFirebase } from "./utils/firebase";
import * as functions from 'firebase-functions';


const app = Express();

// firebase initialize
initFirebase();

// add middleware
app.use(cors);

// API routes
const routeKeys: string[] = Object.keys(routes);
routeKeys.forEach((name) => {
  app.use(routes[name]);
});

exports.api = functions.https.onRequest(app);
