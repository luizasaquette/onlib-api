import { Router } from 'express';
import { signInController } from '../../../shared/SignInComposer';

const authRouter = Router();

authRouter.post('/sessions', (req, res) => signInController.handle(req, res));

export { authRouter };
