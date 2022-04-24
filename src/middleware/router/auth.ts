import { Router } from 'express';
import passport from 'passport';
import { auth } from 'controllers';

export enum AuthRoutes {
  BASE = '/auth',
  LOGIN = '/login',
  LOGIN_RETURN = '/login/return',
  LOGOUT = '/logout',
}

const STEAM_STRATEGY = 'steam';

const authRouter = Router({ mergeParams: true });

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
