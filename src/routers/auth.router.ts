import express from 'express';
import controllers from '../controllers';

const authRouter = express.Router({ mergeParams: true });

const { authController } = controllers;

authRouter.post('/login', authController.login);

export default authRouter;
