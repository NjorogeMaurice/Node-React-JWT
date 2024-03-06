// sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('example', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
