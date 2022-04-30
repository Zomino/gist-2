import { Sequelize, type Dialect } from 'sequelize';
import {
  databaseHost,
  databaseDialect,
  databaseName,
  databaseUser,
  databasePassword,
  databasePort,
} from 'environment';

const options = {
  host: databaseHost,
  dialect: databaseDialect as Dialect,
  port: Number(databasePort),
};

const sequelize = new Sequelize(
  databaseName,
  databaseUser,
  databasePassword,
  options,
);

export default sequelize;
