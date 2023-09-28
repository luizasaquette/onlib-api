import { v4 as uuid } from 'uuid';

import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';

@Entity('users')
class User {
	@PrimaryColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column()
	cpf: string;

	@Column()
	is_admin: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	constructor() {
		this.id = uuid();
	}
}

export { User };
