// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // This is your Sequelize instance

const Farmer = sequelize.define('Farmer', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});


module.exports = Farmer;
