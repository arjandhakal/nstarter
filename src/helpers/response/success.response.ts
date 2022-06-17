import { Response } from 'express';

const successResponse = (res: Response, msg: string, data: [] | {} | null, status: number) => {
  res.status(status || 200).json({
    success: true,
    message: msg,
    data
  });
};

export default successResponse;
