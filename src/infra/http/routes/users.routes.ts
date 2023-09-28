import { Router } from 'express';
import signUpController from '../../../shared/SignUpComposer';

const usersRouter = Router();
usersRouter.post('/', (req, res) => signUpController.handle(req, res));

export { usersRouter };
