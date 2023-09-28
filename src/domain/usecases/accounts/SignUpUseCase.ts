import { AppError } from '../../../shared/errors/AppError';
import { IHasher } from '../../protocols/cryptography/IHasher';
import { ICreateUserDTO } from '../../../shared/dtos/ICreateUserDTO';
import { IUsersRepository } from '../../protocols/repositories/IUsersRepository';

class SignUpUseCase {
	constructor(private usersRepository: IUsersRepository, private hasher: IHasher) {}

	async execute({ name, email, password, cpf }: ICreateUserDTO): Promise<void> {
		const userAlreadyExists = await this.usersRepository.findUserByEMail(email);

		if (userAlreadyExists) throw new AppError('User e-mail already exists!');

		const hashedPassword = await this.hasher.encrypt(password);

		await this.usersRepository.add({
			name,
			email,
			password: hashedPassword,
			cpf,
		});
	}
}

export { SignUpUseCase };
