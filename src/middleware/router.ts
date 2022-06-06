import { Router } from 'express';
import passport from 'passport';

import {
  auth,
  home,
  lists,
} from 'controllers';

import redirectIfNotAuthenticated from './redirect';

const router = Router();

router.get(
  '/',
  home.render,
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
  redirectIfNotAuthenticated,
  lists.render,
);

router.get(
  '/lists/:listID/edit',
  redirectIfNotAuthenticated,
  lists.renderListPage,
);

router.post(
  '/lists',
  // redirect.ifNotAuthenticated,
  lists.create,
);

export default router;
