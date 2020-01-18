const config = require('../../config')
module.exports = {
  "development": {
    "username": config.development.DB_USERNAME,
    "password": config.development.DB_PASSWORD,
    "database": config.development.DB_DATABASE,
    "host": config.development.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "test": {
    "username": config.test.DB_USERNAME,
    "password": config.test.DB_PASSWORD,
    "database": config.test.DB_DATABASE,
    "host": config.test.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "production": {
    "username": config.production.DB_USERNAME,
    "password": config.production.DB_PASSWORD,
    "database": config.production.DB_DATABASE,
    "host": config.production.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": 0
  }
}