import express from 'express';
import userRouter from './user.router';
import authRouter from './auth.router';

const router = express.Router({ mergeParams: true });

router.use('/user', userRouter);
router.use('/auth', authRouter);

export default router;
