import express from 'express';
import controller from '../controllers';
import checkAdminAccess from '../middleware/checkAdminAccess';

const userRouter = express.Router({ mergeParams: true });
const { userController } = controller;

userRouter.get('/findAll', checkAdminAccess, userController.findAll);

export default userRouter;
