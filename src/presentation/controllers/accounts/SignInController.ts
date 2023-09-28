import { Request, Response } from 'express';
import { SignInUseCase } from '../../../domain/usecases/accounts/SignInUseCase';

class SignInController {
	constructor(private signInUseCase: SignInUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body;

		const token = await this.signInUseCase.execute({ email, password });

		return response.json(token);
	}
}

export { SignInController };
