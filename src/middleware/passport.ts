import passport from 'passport';
import { Strategy as SteamStrategy } from 'passport-steam';
import { serverHost, serverPort, steamAPIKey as APIKey } from 'environment';
import { AuthRoutes } from './router';

interface User { }
interface Profile { identifier: string }

type Validate = (
  identifier: string,
  profile: Profile,
  done: (err: null, profile: Profile) => void,
) => void

// configure session management
passport.serializeUser((user, done) => { done(null, user); });
passport.deserializeUser((user: User, done) => { done(null, user); });

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

export default passport;