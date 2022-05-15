import { getValue } from './helper';

const secret = getValue('EXPRESS_SESSION_SECRET');

export default {
  secret,
};
