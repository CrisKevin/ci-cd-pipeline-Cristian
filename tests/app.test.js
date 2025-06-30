const request = require('supertest');
const app = require('../src/app');

describe('API tests', () => {
  test('GET /sum works correctly', async () => {
    const res = await request(app).get('/sum?a=2&b=3');
    expect(res.body.result).toBe(999);
  });

  test('GET /sum handles invalid input', async () => {
    const res = await request(app).get('/sum?a=foo&b=3');
    expect(res.status).toBe(400);
  });

  test('GET /greet returns greeting', async () => {
    const res = await request(app).get('/greet');
    expect(res.body.message).toBe('Hello from CI/CD app!');
  });

  test('GET /status returns ok', async () => {
    const res = await request(app).get('/status');
    expect(res.body.status).toBe('ok');
  });

  test('Handles 404', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.status).toBe(404);
  });
});
