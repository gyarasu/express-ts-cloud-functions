import { Router, Request, Response } from "express";
import { firebaseAuth } from "../../middleware/firebaseAuth";
import { genFunctionName } from "../../utils/functions";
import { IRoutes } from "../../interfaces";

const router = Router();

// If this endpoint requires firebase authentication, add firebase middleware
router.use("/", firebaseAuth);

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    userId: "1234",
    name: "Mike"
  });
});

export const userinfo: IRoutes = {
  name: genFunctionName(__dirname, __filename),
  router
};
