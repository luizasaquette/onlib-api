import { ICreateUserDTO } from '../../../../../src/shared/dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../../../src/domain/protocols/repositories/IUsersRepository';
import { User } from '../../../../../src/domain/entities/User';

class UsersRepositoryStub implements IUsersRepository {
	add(data: ICreateUserDTO): Promise<void> {
		return null;
	}

	findUserById(id: string): Promise<User> {
		const user = Promise.resolve({
			id,
			name: 'any_name',
			email: 'any@mail.com',
			cpf: 'any_cpf',
			password: 'any_password',
			is_admin: true,
			created_at: new Date(),
			updated_at: new Date(),
		});

		return user;
	}

	findUserByEMail(email: string): Promise<User> {
		const user = Promise.resolve({
			id: 'any_id',
			name: 'any_name',
			email,
			cpf: 'any_cpf',
			password: 'any_password',
			is_admin: true,
			created_at: new Date(),
			updated_at: new Date(),
		});

		return user;
	}
}

export { UsersRepositoryStub };
