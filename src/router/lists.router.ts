import { Router } from 'express';
import { lists } from 'controllers';
import { redirectIfNotAuthenticated } from './helper';

const loginRouter = Router();

loginRouter.get(
  '',
  redirectIfNotAuthenticated,
  lists.render,
);

loginRouter.get(
  '/:listID/edit',
  redirectIfNotAuthenticated,
  lists.renderListPage,
);

loginRouter.post(
  '',
  // redirect.ifNotAuthenticated,
  lists.create,
);

export default loginRouter;
