import express from 'express';
import movieController from '../controllers/Movie';
import checkAuth from '../middleware/checkAuth';

const movieRoutes = express.Router({ mergeParams: true });
const { findAll } = movieController;

movieRoutes.get('/findAll', checkAuth, findAll);

export default movieRoutes;
