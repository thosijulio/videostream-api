import express from 'express';
import controller from '../controllers';
import checkAdminAccess from '../middleware/checkAdminAccess';

const userRoutes = express.Router({ mergeParams: true });
const { userController } = controller;

userRoutes.get('/findAll', checkAdminAccess, userController.findAll);
userRoutes.post('/', checkAdminAccess, userController.create);
userRoutes.put('/:email', checkAdminAccess, userController.edit);
userRoutes.delete('/:email', checkAdminAccess, userController.delete);

export default userRoutes;
