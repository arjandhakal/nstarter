import ExampleRepository from '../../repositories/example/example';
import { IExampleDto, IExample } from '../../models/exampleDB';

class ExampleService {
  public exampleRepo: any;

  constructor(exampleRepo: ExampleRepository = new ExampleRepository()) {
    this.exampleRepo = exampleRepo;
  }

  public async createExample(example: IExampleDto): Promise<IExample> {
    return this.exampleRepo.createExample(example);
  }

  public async getAllExamples(): Promise<IExample[]> {
    const examples = await this.exampleRepo.getAllExamples();
    return examples;
  }
}

export default ExampleService;
