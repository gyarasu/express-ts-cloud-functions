import * as Express from "express";
import { routes } from "./routes";
import { cors } from "./middleware/cors";
import { initFirebase } from "./utils/firebase";
import * as functions from "firebase-functions";

interface IRotues {
  name: string;
  router: Express.Router;
}

const app = Express();

// firebase initialize
initFirebase();

// add cors middleware
app.use(cors);

// REST API routes
routes.forEach((routerObj: IRotues) => {
  let singleFunction = app;
  singleFunction.use(routerObj.router);
  exports[routerObj.name] = functions.https.onRequest(singleFunction);
});
