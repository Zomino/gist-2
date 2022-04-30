import { Router } from 'express';
import { login } from 'controllers';
import { redirect } from 'middleware/passport';

const loginRouter = Router();

loginRouter.get(
  '',
  redirect.ifAuthenticated,
  login.render,
);

export default loginRouter;
