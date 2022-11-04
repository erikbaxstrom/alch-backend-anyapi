const pool = require('../utils/pool.js');
module.exports = class SpecialIngredient {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM special_ingredients');
    return rows.map(
      (specialIngredientRow) => new SpecialIngredient(specialIngredientRow)
    );
  }
};
