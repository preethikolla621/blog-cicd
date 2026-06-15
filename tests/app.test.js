const request = require('supertest');
const app = require('../src/app');

describe('Blog API', () => {
  test('GET / returns running message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Blog API is running');
  });

  test('GET /posts returns list of posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('POST /posts creates a new post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ title: 'Test Post', content: 'Test Content' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Post');
  });
});