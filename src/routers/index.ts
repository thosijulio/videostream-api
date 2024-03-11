import express from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import movieRoutes from './movie.routes';

const router = express.Router({ mergeParams: true });

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/movie', movieRoutes);

export default router;
