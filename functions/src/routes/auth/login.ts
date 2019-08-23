import * as Express from "express";
import { genFunctionName } from '../../utils/functions';

const router = Express.Router();

interface ILogin {
  id: string;
  password: string;
}

interface IRotues {
  name: string;
  router: Express.Router;
}


router.post("/", (req: Express.Request, res: Express.Response) => {
  const credential: ILogin = req.body;
  if (credential.id === "sampleuser" && credential.password === "passw0rd") {
    res.status(200).json({
      success: true
    });
  } else {
    res.status(401).json({
      success: false
    });
  }
});

export const login: IRotues = {
  name: genFunctionName(__dirname, __filename),
  router,
};
