import { UsersRepository } from '../infra/database/typeorm/repositories/UsersRepository';
import { SignInController } from '../presentation/controllers/accounts/SignInController';
import { SignInUseCase } from '../domain/usecases/accounts/SignInUseCase';
import { JwtAdapter } from '../infra/auth/JWTAdapter';
import { BCryptAdapter } from '../infra/cryptography/BcryptAdapter';

const usersRepository = new UsersRepository();
const bcryptAdapter = new BCryptAdapter();
const jwtAdapter = new JwtAdapter();
const signInUseCase = new SignInUseCase(usersRepository, bcryptAdapter, jwtAdapter);
const signInController = new SignInController(signInUseCase);

export { signInController };
