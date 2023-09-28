import { SignUpUseCase } from '../../../../src/domain/usecases/accounts/SignUpUseCase';
import { UsersRepositoryStub } from '../../../mocks/domain/protocols/repositories/UsersRepositoryStub';
import { HasherStub } from '../../../mocks/domain/protocols/cryptography/HasherStub';

type SutTypes = {
	usersRepositoryStub: UsersRepositoryStub;
	hasherStub: HasherStub;
	sut: SignUpUseCase;
};

const makeSut = (): SutTypes => {
	const usersRepositoryStub = new UsersRepositoryStub();
	const hasherStub = new HasherStub();

	const sut = new SignUpUseCase(usersRepositoryStub, hasherStub);

	return { usersRepositoryStub, hasherStub, sut };
};

describe('SignUpUseCase', () => {
	it('should not create a user with same e-mail', async () => {
		const { sut } = makeSut();

		const result = await sut.execute({
			name: 'any_name',
			cpf: 'any_cpf',
			email: '@mail.com',
			password: 'any_password',
		});

		expect(result).toThrow(Error('user already exists!'));
	});
});
