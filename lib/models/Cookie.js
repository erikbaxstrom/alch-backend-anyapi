const pool = require('../utils/pool.js');
module.exports = class Cookie {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.batchSize = row.batch_size;
    this.specialIngredient = row.special_ingredient;
    this.containsChocolate = row.contains_chocolate;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cookies');
    return rows.map((cookieRow) => new Cookie(cookieRow));
  }

  static async getCookieById(id) {
    // console.log('get cookie by id:', id);
    const { rows } = await pool.query('SELECT * FROM cookies WHERE id = $1', [
      id,
    ]);
    return new Cookie(rows[0]);
  }
};
