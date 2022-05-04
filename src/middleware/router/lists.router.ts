import { Router } from 'express';
import { lists } from 'controllers';
import { redirect } from 'middleware/passport';

const loginRouter = Router();

loginRouter.get(
  '',
  redirect.ifNotAuthenticated,
  lists.render,
);

export default loginRouter;
