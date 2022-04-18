import expressSession from 'express-session';
import { expressSessionSecret } from 'environment';

const oneDay = 1000 * 60 * 60 * 24;

const options = {
  secret: expressSessionSecret,
  resave: false, // true resaves session to store even if no changes have been made
  saveUninitialized: false, // true saves sessions before they have been modified
  cookie: { maxAge: oneDay },
};

const session = expressSession(options);

export default session;
