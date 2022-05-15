import { getValue } from './helper';

const environment = getValue('NODE_ENV');
const isDevelopment = environment === 'development';
const isProduction = environment === 'production';

export default {
  isDevelopment,
  isProduction,
};
