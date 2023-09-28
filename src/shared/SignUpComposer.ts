import { UsersRepository } from '../infra/database/typeorm/repositories/UsersRepository';
import { BCryptAdapter } from '../infra/cryptography/BcryptAdapter';
import { SignUpUseCase } from '../domain/usecases/accounts/SignUpUseCase';
import { SignUpController } from '../presentation/controllers/accounts/SignUpController';

const usersRepository = new UsersRepository();
const bcryptAdapter = new BCryptAdapter();
const signUpUseCase = new SignUpUseCase(usersRepository, bcryptAdapter);
const signUpController = new SignUpController(signUpUseCase);

export default signUpController;
