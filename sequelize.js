const { Sequelize } = require('sequelize');
const { host, username, password, database, dialect } = require('./config');

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

module.exports = sequelize;
