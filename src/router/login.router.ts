import { Router } from 'express';
import { login } from 'controllers';
import { redirectIfAuthenticated } from './helper';

const loginRouter = Router();

loginRouter.get(
  '',
  redirectIfAuthenticated,
  login.render,
);

export default loginRouter;
