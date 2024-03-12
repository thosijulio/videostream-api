import express from 'express';
import controller from '../controllers';
// import checkAuth from '../middleware/checkAuth';

const watchRoutes = express.Router({ mergeParams: true });
const { watchController } = controller;

watchRoutes.get('/', watchController.watch);

export default watchRoutes;
