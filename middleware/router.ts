import { Router } from 'express';
import passport from 'passport';
import { home, auth } from 'controllers';

// constants
export enum Routes {
  Home = '/',
  Login = '/login',
  LoginReturn = '/login/return',
  Logout = '/logout'
}
const STEAM_STRATEGY = 'steam';

// configure router
const router = Router();

router.get(Routes.Home, home.render);
router.get(
  Routes.Login,
  passport.authenticate(STEAM_STRATEGY, { failureRedirect: Routes.Home }),
);
router.get(
  Routes.LoginReturn,
  passport.authenticate(STEAM_STRATEGY, { failureRedirect: Routes.Home }),
  auth.redirectHome,
);
router.get(Routes.Logout, auth.logout);

export default router;
