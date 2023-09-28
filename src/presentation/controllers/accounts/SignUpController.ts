import { Request, Response } from 'express';
import { SignUpUseCase } from '../../../domain/usecases/accounts/SignUpUseCase';

class SignUpController {
	constructor(private signUpUseCase: SignUpUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, email, password, cpf } = request.body;

		await this.signUpUseCase.execute({ name, email, password, cpf });

		return response.json();
	}
}

export { SignUpController };
