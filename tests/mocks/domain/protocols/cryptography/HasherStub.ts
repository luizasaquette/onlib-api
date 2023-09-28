import { IHasher } from '../../../../../src/domain/protocols/cryptography/IHasher';

class HasherStub implements IHasher {
	encrypt(plaintext: string): Promise<string> {
		return Promise.resolve('any_hash');
	}

	compare(plaintext: string, hashedPassword: string): Promise<boolean> {
		return Promise.resolve(true);
	}
}

export { HasherStub };
