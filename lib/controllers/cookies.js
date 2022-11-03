const { Router } = require('express');
const Cookie = require('../models/Cookie.js');

module.exports = Router().get('/', async (req, res) => {
  const cookies = await Cookie.getAll();
  const filtered = cookies.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
