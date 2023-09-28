import { Router } from 'express';
import { usersRouter } from './users.routes';
import { authRouter } from './auth.routes';
import authMiddleware from '../middlewares/AuthMiddleware';

const router = Router();

router.use('/users', usersRouter);
router.use(authRouter);
router.use(authMiddleware);

export { router };
