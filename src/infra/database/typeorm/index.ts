import { DataSource } from 'typeorm';

import { User } from '../../../domain/entities/User';
import { CreateUsers1679666864911 } from './migrations/1679666864911-CreateUsers';

const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'docker',
	database: 'onlib-db',
	migrations: [CreateUsers1679666864911],
	entities: [User],
});

async function connect() {
	await AppDataSource.initialize();
}

export { connect, AppDataSource };
