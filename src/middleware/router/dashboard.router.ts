import { Router } from 'express';
import { dashboard } from 'controllers';
import { redirect } from 'middleware/passport';

const dashboardRouter = Router();

dashboardRouter.get(
  '',
  redirect.ifNotAuthenticated,
  dashboard.render,
);

export default dashboardRouter;
