import * as Express from "express";
import { firebaseAuth } from "../../middleware/firebaseAuth";
import { genFunctionName } from '../../utils/functions';

interface IRotues {
  name: string;
  router: Express.Router;
}


const router = Express.Router();

// If this endpoint requires firebase authentication, add firebase middleware
router.use("/", firebaseAuth);

router.get(
  "/",
  (req: Express.Request, res: Express.Response) => {
    res.status(200).json({
      userId: "1234",
      name: "Mike"
    });
  }
);

export const userinfo: IRotues = {
  name: genFunctionName(__dirname, __filename),
  router
};
