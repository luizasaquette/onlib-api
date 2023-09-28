import { NextFunction, Request, Response } from 'express';
import { UsersRepository } from '../../database/typeorm/repositories/UsersRepository';
import { AppError } from '../../../shared/errors/AppError';
import { JwtAdapter } from '../../auth/JWTAdapter';

const jwtAdapter = new JwtAdapter();
const usersRepository = new UsersRepository();

export default async function authMiddleware(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const { authorization } = request.headers;

	if (!authorization) throw new AppError('Token missing!', 401);

	const [, token] = authorization.split(' ');

	const userId = jwtAdapter.decode(token);

	if (!userId) throw new AppError('Invalid token!', 401);

	const user = await usersRepository.findUserById(userId);

	if (!user) throw new AppError('User does not exist!', 401);

	next();
}
