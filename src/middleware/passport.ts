import passport from 'passport';
import { Strategy as SteamStrategy } from 'passport-steam';

import { environment } from 'common';
import { User } from 'models';
import { steamData } from 'services';

type tProfile = {
  identifier: string,
}

type tValidate = (
  identifier: string,
  profile: tProfile,
  done: (err: null, profile: tProfile) => void,
) => void

// Type must be any as user type used by Passport is an empty object
passport.serializeUser(async (authUser: any, done) => {
  const user = await User.findOne({ where: { steamId: authUser.id } });

  if (user) done(null, user.id);

  // If user does not exist in database, fetch data from Steam and create
  const newUser = await steamData.createUser(authUser.id);
  done(null, newUser.id);
});

passport.deserializeUser(async (userId: number, done) => {
  const user = await User.findByPk(userId, { attributes: { exclude: ['profileURL'] } });
  done(null, user);
});

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
