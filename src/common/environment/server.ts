import { getValue } from './helper';

const host = getValue('SERVER_HOST');
const port = getValue('SERVER_PORT');

export default {
  host,
  port,
};
