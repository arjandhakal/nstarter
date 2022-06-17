import { Request, Response, NextFunction } from 'express';
import ExampleService from '../../services/example/example';
import { CreateExampleInput } from '../../services/example/example.schema';
import successResponse from '../../helpers/response/success.response';

class ExampleController {
  public exampleService: ExampleService;

  constructor(exampleService: ExampleService) {
    this.exampleService = exampleService;
    this.store = this.store.bind(this);
    this.index = this.index.bind(this);
  }

  public async store(req: Request<{}, {}, CreateExampleInput['body']>, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const example = await this.exampleService.createExample(body);
      successResponse(res, 'Successfully created Example', example, 201);
    } catch (e: any) {
      next(e);
    }
  }

  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const examples = await this.exampleService.getAllExamples();
      successResponse(res, 'Successfully retrieved Examples', examples, 200);
    } catch (e: any) {
      next(e);
    }
  }
}

export default ExampleController;
