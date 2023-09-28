interface ITokenGenerator {
	sign(userId: string): string;
	decode(token: string): string;
}

export { ITokenGenerator };
