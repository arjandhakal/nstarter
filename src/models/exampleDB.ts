export interface IExample {
  id: number;
  name: string;
  description: string;
}

export interface IExampleDto {
  name: string;
  description: string;
}

export interface IDatabaseState {
  examples: IExample[];
}

class Database {
  private state: IDatabaseState = {
    examples: []
  };

  async create(example: Omit<IExample, 'id'>) {
    if (!example) {
      throw new Error('Missing Example');
    }
    const createdExample = {
      id: this.state.examples.length + 1,
      ...example
    };

    return createdExample;
  }

  async all() {
    return this.state.examples;
  }

  public clear() {
    this.state.examples = [];
  }
}

export default Database;
