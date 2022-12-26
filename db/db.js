const chalk = require('chalk');
const pool = require('./config');

const errorMsg = chalk.bgWhite.redBright;
const successMsg = chalk.bgWhite.greenBright;

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    try {
      this.connection = await pool.getConnection();
      console.log(successMsg('DB connected'));
    } catch (err) {
      console.log(errorMsg(`DB connection failed! Reason: ${err.message}`));
    } finally {
      if (this.connection) await this.connection.release();
    }
  }

  async query(sql, args) {
    try {
      const result = await this.connection.query(sql, args);
      return result;
    } catch (err) {
      console.log(errorMsg(err.message));
    }
  }
}

module.exports = new Database();
