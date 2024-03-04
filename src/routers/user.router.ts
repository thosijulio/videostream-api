import express from 'express';
import controller from '../controllers';
import checkAdminAccess from '../middleware/checkAdminAccess';

const userRouter = express.Router({ mergeParams: true });
const { userController } = controller;

userRouter.get('/findAll', checkAdminAccess, userController.findAll);
userRouter.post('/', checkAdminAccess, userController.create);
userRouter.put('/:email', checkAdminAccess, userController.edit);
userRouter.delete('/:email', checkAdminAccess, userController.delete);

export default userRouter;
