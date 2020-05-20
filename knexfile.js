// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/diary.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    useNullAsDefault: true,
    seeds: { directory: './data/seeds' },
  },
};
