import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import errorResponse from '../helpers/response/error.response';

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    });
    next();
  } catch (e: any) {
    errorResponse(res, {
      error: e,
      status: 400,
      message: "Something went wrong while validating request'"
    });
  }
};

export default validate;
