import { Router } from 'express';
import passport from 'passport';

import {
  auth,
  dashboard,
  lists,
  login,
} from 'controllers';

import redirect from './redirect';

const router = Router();

router.get(
  '/',
  redirect.redirectIfNotAuthenticated,
  dashboard.render,
);

router.get(
  '/auth/login',
  passport.authenticate('steam', { failureRedirect: '/' }),
);

router.get(
  '/auth/login/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  auth.redirectHome,
);

router.get(
  '/auth/logout',
  auth.logout,
);

router.get(
  '/lists',
  redirect.redirectIfNotAuthenticated,
  lists.render,
);

router.get(
  '/lists/:listID/edit',
  redirect.redirectIfNotAuthenticated,
  lists.renderListPage,
);

router.post(
  '/lists',
  // redirect.ifNotAuthenticated,
  lists.create,
);

router.get(
  '/login',
  redirect.redirectIfAuthenticated,
  login.render,
);

export default router;
