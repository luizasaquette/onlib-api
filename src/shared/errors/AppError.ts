class AppError extends Error {
	readonly statusCode: number;

	constructor(message: string, statusCode = 400) {
		super(message);

		this.statusCode = statusCode;
	}
}

export { AppError };
