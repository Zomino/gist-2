import { type Request, type Response, type NextFunction } from 'express';
import passport from 'passport';
import { Strategy as SteamStrategy } from 'passport-steam';
import { serverHost, serverPort, steamAPIKey as APIKey } from 'environment';
import { AuthRoutes } from './router/routes';

export interface ExpressUser {}

interface Profile { identifier: string }

type Validate = (
  identifier: string,
  profile: Profile,
  done: (err: null, profile: Profile) => void,
) => void

type Middleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void;

// configure session management
passport.serializeUser((user, done) => { done(null, user); });
passport.deserializeUser((user: ExpressUser, done) => { done(null, user); });

// configure passport
const serverURL = `http://${serverHost}:${serverPort}`;
const options = {
  returnURL: `${serverURL}${AuthRoutes.BASE}${AuthRoutes.LOGIN_RETURN}`,
  realm: serverURL,
  apiKey: APIKey,
};

const validate: Validate = (identifier, profile, done) => { // called with passport.authenticate
  process.nextTick(() => {
    profile.identifier = identifier; // identifier is steam profile URL e.g. https://steamcommunity.com/openid/id/XXXXXXXXXXXXXXXXX
    return done(null, profile);
  });
};

passport.use(new SteamStrategy(options, validate));

export const redirectIfNotAuthenticated: Middleware = (request, response, next) => {
  if (!request.isAuthenticated()) return response.redirect('/login');
  return next();
};

export const redirectIfAuthenticated: Middleware = (request, response, next) => {
  if (request.isAuthenticated()) return response.redirect('/');
  return next();
};

export default passport;
