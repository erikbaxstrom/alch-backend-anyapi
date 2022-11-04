const { Router } = require('express');
const SpecialIngredient = require('../models/SpecialIngredient.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const specialIngredient = await SpecialIngredient.getSpecialIngredientById(
      req.params.id
    );
    console.log('specialIngredient', specialIngredient);
    res.json(specialIngredient);
  })
  .get('/', async (req, res) => {
    const specialIngredients = await SpecialIngredient.getAll();
    const filtered = specialIngredients.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
