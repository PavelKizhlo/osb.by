require('dotenv').config();
const chalk = require('chalk');
const mariadb = require('mariadb');

const errorMsg = chalk.bgWhite.redBright;
const successMsg = chalk.bgWhite.greenBright;

class Database {
  constructor() {
    this.pool = null;
  }

  async connect() {
    try {
      this.pool = mariadb.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        connectionLimit: 5,
      });

      console.log(successMsg('DB connected'));
    } catch (err) {
      console.log(errorMsg(`DB connection failed! Reason: ${err.message}`));
    }
  }

  async query(sql, args) {
    let connection;
    try {
      connection = await this.pool.getConnection();
      const result = await connection.query(sql, args);
      return result;
    } catch (err) {
      console.log(errorMsg(err.message));
    } finally {
      if (connection) await connection.release();
    }
  }
}

module.exports = new Database();
