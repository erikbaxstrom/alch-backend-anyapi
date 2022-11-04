const { Router } = require('express');
const SpecialIngredient = require('../models/SpecialIngredient.js');

module.exports = Router().get('/', async (req, res) => {
  const specialIngredients = await SpecialIngredient.getAll();
  const filtered = specialIngredients.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
