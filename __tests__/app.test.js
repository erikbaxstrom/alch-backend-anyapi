const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { cookies } = require('./cookies-data.js');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('example test - delete me!', () => {
    expect(1).toEqual(1);
  });
  afterAll(() => {
    pool.end();
  });
});
