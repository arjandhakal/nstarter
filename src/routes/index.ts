import { Express } from 'express';
import healthcheckRoutes from './healthcheck.route';

const routeHelper = (app: Express) => {
  healthcheckRoutes(app);
};

export default routeHelper;
