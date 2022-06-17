import { Express } from 'express';
import exampleController from '../controllers/example/example.bootstrap';
import { createExampleSchema } from '../services/example/example.schema';
import validate from '../middlewares/validateResource';

function router(app: Express) {
  app.post('/api/examples', validate(createExampleSchema), exampleController.store);
  app.get('/api/examples', exampleController.index);
}

export default router;
