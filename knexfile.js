module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: 'car-dealer.db3'
    },
    migrations: {
      directory: './migrations'
    }
  },
};