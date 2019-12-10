// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.car-dealer.db3'
    },
    useNullAsDefault: true // only needed when using sqlite3
  }

};
