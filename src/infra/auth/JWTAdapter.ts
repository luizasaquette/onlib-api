import { sign, verify } from 'jsonwebtoken';
import { ITokenGenerator } from '../../domain/protocols/auth/TokenGenerator';

class JwtAdapter implements ITokenGenerator {
	sign(userId: string): string {
		const token = sign({}, '9ee1cab8cc778fdff402eae6a9b6820', { subject: userId, expiresIn: '1d' });

		return token;
	}

	decode(token: string): string {
		const { sub: id } = verify(token, '9ee1cab8cc778fdff402eae6a9b6820');

		return id.toString();
	}
}

export { JwtAdapter };
