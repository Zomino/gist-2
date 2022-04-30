import { Router } from 'express';
import { home } from 'controllers';
import { redirectIfNotAuthenticated } from 'middleware/passport';

const homeRouter = Router();

homeRouter.get(
  '',
  redirectIfNotAuthenticated,
  home.render,
);

export default homeRouter;
