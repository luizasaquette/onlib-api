import { User } from 'src/domain/entities/User';
import { ICreateUserDTO } from '../../../shared/dtos/ICreateUserDTO';

interface IUsersRepository {
	add(data: ICreateUserDTO): Promise<void>;
	findUserById(id: string): Promise<User>;
	findUserByEMail(email: string): Promise<User>;
}

export { IUsersRepository };
