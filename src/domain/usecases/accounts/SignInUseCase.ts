import { AppError } from '../../../shared/errors/AppError';
import { ITokenGenerator } from '../../protocols/auth/TokenGenerator';
import { IHasher } from '../../protocols/cryptography/IHasher';
import { IUsersRepository } from '../../protocols/repositories/IUsersRepository';

interface IRequest {
	email: string;
	password: string;
}

interface IResponse {
	token: string;
	user: {
		id: string;
		email: string;
	};
}

class SignInUseCase {
	constructor(
		private usersRepository: IUsersRepository,
		private hasher: IHasher,
		private tokenGenerator: ITokenGenerator
	) {}

	async execute({ email, password }: IRequest): Promise<IResponse> {
		const user = await this.usersRepository.findUserByEMail(email);

		if (!user) throw new AppError('E-mail or password incorrect!', 401);

		const isPasswordCorrect = await this.hasher.compare(password, user.password);

		if (!isPasswordCorrect) throw new AppError('E-mail or password incorrect!', 401);

		const token = this.tokenGenerator.sign(user.id);

		return {
			token,
			user: {
				id: user.id,
				email: user.email,
			},
		};
	}
}

export { SignInUseCase };
