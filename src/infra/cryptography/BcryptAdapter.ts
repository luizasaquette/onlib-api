import { hash, compare } from 'bcrypt';

import { IHasher } from '../../domain/protocols/cryptography/IHasher';

class BCryptAdapter implements IHasher {
	async encrypt(plaintext: string): Promise<string> {
		return await hash(plaintext, 8);
	}

	async compare(plaintext: string, hashedPassword: string): Promise<boolean> {
		return await compare(plaintext, hashedPassword);
	}
}

export { BCryptAdapter };
