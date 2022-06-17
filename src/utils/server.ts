import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routeHelper from '../routes';
import errorHandler from '../middlewares/errorHandler';

class Server {
  public app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(cors());
    routeHelper(this.app);
    this.app.use(errorHandler);
  }

  getServer(): Express {
    return this.app;
  }
}

export default new Server();
