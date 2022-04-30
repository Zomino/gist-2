import { Router } from 'express';
import passport from 'passport';
import { auth } from 'controllers';

const authRouter = Router();

authRouter.get(
  '/login',
  passport.authenticate('steam', { failureRedirect: '/' }),
);

authRouter.get(
  '/login/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  auth.redirectHome,
);

authRouter.get(
  '/logout',
  auth.logout,
);

export default authRouter;
