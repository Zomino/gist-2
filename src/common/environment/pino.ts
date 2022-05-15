import { getValue } from './helper';

const logLevel = getValue('PINO_LOG_LEVEL', false);

export default {
  logLevel,
};
