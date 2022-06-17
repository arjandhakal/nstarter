import { Response } from 'express';
import { ErrorResponse } from '../../types';

const errorResponse = (res: Response, error: ErrorResponse) => {
  res.status(error?.status || 500).json({
    success: false,
    error: error?.error || 'Internal Server Error',
    message: error?.message || 'Something went wrong'
  });
};

export default errorResponse;
