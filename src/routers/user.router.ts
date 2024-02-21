import express from 'express';
import controller from '../controllers';
import checkAuth from '../middleware/checkAuth';

const userRouter = express.Router({ mergeParams: true });
const { userController } = controller;

userRouter.get('/findAll', checkAuth, userController.findAll);

export default userRouter;
