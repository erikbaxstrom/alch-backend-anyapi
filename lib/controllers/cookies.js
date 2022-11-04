const { Router } = require('express');
const Cookie = require('../models/Cookie.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const cookie = await Cookie.getCookieById(req.params.id);
    res.json(cookie);
  })
  .get('/', async (req, res) => {
    const cookies = await Cookie.getAll();
    const filtered = cookies.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
