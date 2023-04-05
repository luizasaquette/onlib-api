import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { AppError } from '../../shared/errors/AppError';
import { router } from './routes';
import { connect } from '../database/typeorm';

connect();

const app = express();

app.use(express.json());
app.use(router);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({ error: err.message });
	}
	return response.status(500).json({
		error: err.message,
	});
});

export { app };
