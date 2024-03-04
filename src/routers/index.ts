import express from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';

const router = express.Router({ mergeParams: true });

router.use('/user', userRoutes);
router.use('/auth', authRoutes);

export default router;
