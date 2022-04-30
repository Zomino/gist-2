import passport from 'passport';
import { Strategy as SteamStrategy } from 'passport-steam';
import { serverHost, serverPort, steamAPIKey as APIKey } from 'environment';
import { type ExpressUser } from './types';

interface Profile { identifier: string }

type Validate = (
  identifier: string,
  profile: Profile,
  done: (err: null, profile: Profile) => void,
) => void

// configure session management
passport.serializeUser((user, done) => { done(null, user); });
passport.deserializeUser((user: ExpressUser, done) => { done(null, user); });

const serverURL = `http://${serverHost}:${serverPort}`;
const options = {
  returnURL: `${serverURL}/auth/login/return`,
  realm: serverURL,
  apiKey: APIKey,
};

const validate: Validate = (identifier, profile, done) => { // called on passport.authenticate
  process.nextTick(() => {
    profile.identifier = identifier; // identifier is steam profile URL e.g. https://steamcommunity.com/openid/id/XXXXXXXXXXXXXXXXX
    return done(null, profile);
  });
};

passport.use(new SteamStrategy(options, validate));

export default passport;
