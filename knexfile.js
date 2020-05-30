// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './car_dealer.db3'
    },
    migration: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
  },
  useNullAsDefault: true
},

};
