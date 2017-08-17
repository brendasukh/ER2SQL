const Sequelize = require('sequelize')
const db = require('../db')

const Database = db.define('database', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Database;
