import passport from 'passport';
import { Strategy as SteamStrategy } from 'passport-steam';

import { type tExpressUser, environment } from 'common';

type tProfile = {
  identifier: string,
}

type tValidate = (
  identifier: string,
  profile: tProfile,
  done: (err: null, profile: tProfile) => void,
) => void

// TODO: refer to https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
passport.serializeUser((user, done) => { done(null, user); });
passport.deserializeUser((user: tExpressUser, done) => { done(null, user); });

const { server, steamAPI } = environment;
const serverURL = `http://${server.host}:${server.port}`;

const options = {
  returnURL: `${serverURL}/auth/login/return`,
  realm: serverURL,
  apiKey: steamAPI.key,
};

// Called on passport.authenticate
const validate: tValidate = (identifier, profile, done) => {
  process.nextTick(() => {
    // Identifier is steam profile URL e.g. https://steamcommunity.com/openid/id/XXXXXXXXXXXXXXXXX
    profile.identifier = identifier;
    return done(null, profile);
  });
};

passport.use(new SteamStrategy(options, validate));

export default passport;
