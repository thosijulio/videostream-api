import express from 'express';
import controller from '../controllers/';

const userRouter = express.Router({ mergeParams: true });
const { userController } = controller;

userRouter.get('/', userController.getAll);

export default userRouter;
