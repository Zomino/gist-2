import { Router } from 'express';
import passport from 'passport';
import { auth } from 'controllers';
import { AuthRoutes } from './routes';

const STEAM_STRATEGY = 'steam';

const authRouter = Router();

authRouter.get(
  AuthRoutes.LOGIN,
  passport.authenticate(STEAM_STRATEGY, { failureRedirect: '/' }),
);

authRouter.get(
  AuthRoutes.LOGIN_RETURN,
  passport.authenticate(STEAM_STRATEGY, { failureRedirect: '/' }),
  auth.redirectHome,
);

authRouter.get(
  AuthRoutes.LOGOUT,
  auth.logout,
);

export default authRouter;
