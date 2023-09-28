interface IHasher {
	encrypt(plaintext: string): Promise<string>;
	compare(plaintext: string, hashedPassword: string): Promise<boolean>;
}

export { IHasher };
