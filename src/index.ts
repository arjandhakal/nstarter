import { PORT } from './helpers/constants';
import server from './utils/server';
import logger from './utils/logger';

const port = PORT || 7005;

const app = server.getServer();

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
