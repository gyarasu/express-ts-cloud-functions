import * as Express from 'express';

const router = Express.Router();

router.get('/sample/userinfo', async (req: Express.Request, res: Express.Response) => {
  res.status(200).json({
    userId: '1234',
    name: 'Mike',
  });
});

export const sample = router;
