import supertest from 'supertest';
import server from '../utils/server';

const app = server.getServer();

describe('API', () => {
  it('should return OK', async () => {
    const response = await supertest(app).get('/healthcheck');
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });
});
