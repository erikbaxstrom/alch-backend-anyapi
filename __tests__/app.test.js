const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { cookies } = require('../lib/cookies-data.js');
const { specialIngredients } = require('../lib/specialIngredient-data.js');

describe('cookies routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/cookies should return a list of cookies and their ids', async () => {
    const res = await request(app).get('/cookies');
    // console.log('res', res);
    const expected = cookies.map((cookie) => {
      return { id: cookie.id, name: cookie.name };
    });
    // console.log('res.body', res.body);
    expect(res.body).toEqual(expected);
  });

  it('/cookies/:id should return a cookie and details for a given id', async () => {
    const res = await request(app).get('/cookies/3');
    const expected = {
      id: '3',
      name: 'Gingerbread Humanoid',
      specialIngredient: 'Royal Icing',
      batchSize: 36,
      containsChocolate: false,
    };
    expect(res.body).toEqual(expected);
  });

  // afterAll(() => {
  //   pool.end();
  // });
});

describe('special-ingredient routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/special-ingredients should return a list of special ingredients and their ids', async () => {
    const res = await request(app).get('/special-ingredients');
    const expected = specialIngredients;
    expect(res.body).toEqual(expected);
  });
});
