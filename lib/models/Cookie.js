const pool = require('../utils/pool.js');
module.exports = class Cookie {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.batchSize = row.batch_size;
    this.containsChocolate = row.contains_chocolate;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cookies');
    return rows.map((cookieRow) => new Cookie(cookieRow));
  }
};
