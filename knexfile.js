// Update with your config settings.

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
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};
