import passport from 'passport';
import { Strategy as SteamStrategy } from 'passport-steam';
import { environment } from 'common';
import { ExpressUser } from 'common/types';
import { type Validate } from './types';

passport.serializeUser((user, done) => { done(null, user); });
passport.deserializeUser((user: ExpressUser, done) => { done(null, user); });

const { server, steamAPI } = environment;
const serverURL = `http://${server.host}:${server.port}`;
const options = {
  returnURL: `${serverURL}/auth/login/return`,
  realm: serverURL,
  apiKey: steamAPI.key,
};

// Called on passport.authenticate
const validate: Validate = (identifier, profile, done) => {
  process.nextTick(() => {
    // Identifier is steam profile URL e.g. https://steamcommunity.com/openid/id/XXXXXXXXXXXXXXXXX
    profile.identifier = identifier;
    return done(null, profile);
  });
};

passport.use(new SteamStrategy(options, validate));

export default passport;
