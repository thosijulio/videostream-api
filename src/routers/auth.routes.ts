import express from 'express';
import controllers from '../controllers';

const authRoutes = express.Router({ mergeParams: true });

const { authController } = controllers;

authRoutes.post('/login', authController.login);

export default authRoutes;
