// sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.SQL_DB_NAME, process.env.SQL_USER_NAME, process.env.SQL_USER_PASSWORD, {
  host: process.env.SQL_DB_HOST,
  dialect: process.env.SQL_DB_DIALECT
});



module.exports = sequelize;
