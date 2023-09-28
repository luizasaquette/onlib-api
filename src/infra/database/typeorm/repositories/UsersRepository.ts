import { Repository } from 'typeorm';

import { AppDataSource } from '..';

import { ICreateUserDTO } from '../../../../shared/dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../../domain/protocols/repositories/IUsersRepository';
import { User } from '../../../../domain/entities/User';

class UsersRepository implements IUsersRepository {
	private repository: Repository<User>;

	constructor() {
		this.repository = AppDataSource.getRepository(User);
	}

	async add({ name, email, cpf, password }: ICreateUserDTO): Promise<void> {
		const user = this.repository.create({ name, email, cpf, password });

		await this.repository.save(user);
	}

	async findUserById(id: string): Promise<User> {
		return await this.repository.findOne({ where: { id } });
	}

	async findUserByEMail(email: string): Promise<User> {
		return await this.repository.findOne({ where: { email } });
	}
}

export { UsersRepository };
