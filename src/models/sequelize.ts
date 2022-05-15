import { Sequelize, type Dialect } from 'sequelize';
import { environment } from 'common';

const { database } = environment;
const options = {
  host: database.host,
  dialect: database.dialect as Dialect,
  logging: false,
  port: Number(database.port),
  pool: {
    max: 5,
    idle: 10000,
  },
};

const sequelize = new Sequelize(
  database.name,
  database.user,
  database.password,
  options,
);

export default sequelize;
