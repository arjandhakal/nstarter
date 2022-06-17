import Database, { IExampleDto, IExample } from '../../models/exampleDB';

class ExampleRepository {
  public db;

  constructor() {
    this.db = new Database();
  }

  public async createExample(example: IExampleDto): Promise<IExample> {
    return this.db.create(example);
  }

  public async getAllExamples(): Promise<IExample[]> {
    const examples = await this.db.all();
    return examples;
  }
}

export default ExampleRepository;
