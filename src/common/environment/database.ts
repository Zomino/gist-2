import { getValue } from './helper';

const dialect = getValue('DATABASE_DIALECT');
const host = getValue('DATABASE_HOST');
const name = getValue('DATABASE_NAME');
const password = getValue('DATABASE_PASSWORD');
const port = getValue('DATABASE_PORT');
const user = getValue('DATABASE_USER');

export default {
  dialect,
  host,
  name,
  password,
  port,
  user,
};
