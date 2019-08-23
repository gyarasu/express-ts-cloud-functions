import * as Express from "express";
import { routes } from "./routes";
import { cors } from "./middleware/cors";
import { initFirebase } from "./utils/firebase";
import * as functions from "firebase-functions";

const app = Express();

// firebase initialize
initFirebase();

// add cors middleware
app.use(cors);

// REST API routes
routes.forEach(routerObj => {
  let singleFunction = app;
  singleFunction.use(routerObj.router);
  exports[routerObj.key] = functions.https.onRequest(singleFunction);
});
