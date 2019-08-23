import { Router, Request, Response } from "express";
import { firebaseAuth } from "../../middleware/firebaseAuth";
import { genFunctionName } from "../../utils/functions";
import { IRoutes } from "../../interfaces";

const router = Router();

// If this endpoint requires firebase authentication, add firebase middleware
router.use("/", firebaseAuth);

router.get("/", (req: Request, res: Response) => {
  res.status(200).json([
    {
      id: 123,
      name: "My favorite things"
    },
    {
      id: 345,
      name: "Someday My Prince Will Come"
    }
  ]);
});

export const getBookmarks: IRoutes = {
  name: genFunctionName(__dirname, __filename),
  router
};
