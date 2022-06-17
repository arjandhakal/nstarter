import ExampleRepository from '../../repositories/example/example';
import ExampleService from '../../services/example/example';
import ExampleController from './example.controller';

const exampleRepo = new ExampleRepository();
const exampleService = new ExampleService(exampleRepo);
const exampleController = new ExampleController(exampleService);

export default exampleController;
