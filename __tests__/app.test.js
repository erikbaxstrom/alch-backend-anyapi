const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { cookies } = require('./cookies-data.js');

describe('cookies routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/cookies should return a list of cookies and their ids', async () => {
    const res = await request(app).get('/cookies');
    const expected = cookies.map((cookie) => {
      return { id: cookie.id, name: cookie.name };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});

// describe('backend-express-template routes', () => {
//   beforeEach(() => {
//     return setup(pool);
//   });
//   it('example test - delete me!', () => {
//     expect(1).toEqual(1);
//   });
//   afterAll(() => {
//     pool.end();
//   });
// });
