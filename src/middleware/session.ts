import expressSession from 'express-session';
import { environment } from 'common';

const oneDay = 1000 * 60 * 60 * 24;

const options = {
  secret: environment.session.secret,
  // True resaves session to store even if no changes have been made
  resave: false,
  // True saves sessions before they have been modified
  saveUninitialized: false,
  cookie: { maxAge: oneDay },
};

const session = expressSession(options);

export default session;
