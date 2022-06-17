import { Express } from 'express';

function router(app: Express) {
  app.get('/healthcheck', (req, res) => {
    res.send('OK');
  });
}

export default router;
