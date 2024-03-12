import express from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import movieRoutes from './movie.routes';
import watchRoutes from './watch.routes';

const router = express.Router({ mergeParams: true });

router.use('/auth', authRoutes);
router.use('/movie', movieRoutes);
router.use('/user', userRoutes);
router.use('/watch', watchRoutes);

export default router;
