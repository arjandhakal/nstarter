import { NextFunction, Request, Response } from 'express';
import logger from '../utils/logger';
import errorResponse from '../helpers/response/error.response';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || (err.errors && err?.errors?.[0].message) || 'Internal Server Error';
  logger.error(err);
  errorResponse(res, { status, error: 'Error', message });
};

process.on('unhandledRejection', (err: Error) => {
  logger.error(`unhandledRejection: ${err.message} ${err.stack}`);
  process.exit();
});

process.on('uncaughtException', (err: Error) => {
  logger.error(`unhandledRejection: ${err.message} ${err.stack}`);
  process.exit();
});

export default errorHandler;
