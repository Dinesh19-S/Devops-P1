const request = require('supertest');
const app = require('../server');

describe('API Tests', () => {
  it('GET / - responds with json', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain('Hello from Docker CI/CD Pipeline!');
  });

  it('GET /health - responds with healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});