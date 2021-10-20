module.exports = {
  //different configs for different dbs(dev, prod, testing, qa, staging)
  development: {
    client: "sqlite3",
    connection: {
      filename: `${__dirname}/data/anywhere_fitness.db3`,
    },
    useNullAsDefault: true,
    migrations: {
      directory: `${__dirname}/data/migrations`, // put in an enviroment variable
    },
    seeds: {
      directory: `${__dirname}/data/seeds`,
    },
  },
};