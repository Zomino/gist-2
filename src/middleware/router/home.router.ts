import { Router } from 'express';
import { home } from 'controllers';
import { redirect } from 'middleware/passport';

const homeRouter = Router();

homeRouter.get(
  '',
  redirect.ifNotAuthenticated,
  home.render,
);

export default homeRouter;
