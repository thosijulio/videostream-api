import express from 'express';
import userRouter from './userRouter';

const router = express.Router({ mergeParams: true });

router.use('/user', userRouter);

export default router;
