import { Express } from 'express';
import healthcheckRoutes from './healthcheck.route';
import exampleRouter from './example.route';

const routeHelper = (app: Express) => {
  healthcheckRoutes(app);
  exampleRouter(app);
};

export default routeHelper;
