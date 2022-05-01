import { Sequelize, type Dialect } from 'sequelize';
import {
  databaseHost,
  databaseDialect,
  databaseName,
  databaseUser,
  databasePassword,
  databasePort,
} from 'environment';
import User from './User';

const options = {
  host: databaseHost,
  dialect: databaseDialect as Dialect,
  logging: false,
  port: Number(databasePort),
  pool: {
    max: 5,
    idle: 10000,
  },
};

const sequelize = new Sequelize(
  databaseName,
  databaseUser,
  databasePassword,
  options,
);

User.initialize(sequelize);

export default sequelize;
