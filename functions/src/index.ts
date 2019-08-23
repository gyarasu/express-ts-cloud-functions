import * as Express from 'express';
import { routes } from './routes';
import { cors } from './middleware/cors';
import { initFirebase } from './utils/firebase';
import * as functions from 'firebase-functions';
import { IRoutes } from './interfaces';

// firebase initialize
initFirebase();

// REST API routes
routes.forEach((routerObj: IRoutes) => {
  const app = Express();

  // add cors middleware
  app.use(cors);

  // export routes individually for cloud functions
  app.use(routerObj.router);
  exports[routerObj.name] = functions.https.onRequest(app);
});
