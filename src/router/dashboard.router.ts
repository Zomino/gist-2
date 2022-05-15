import { Router } from 'express';
import { dashboard } from 'controllers';
import { redirectIfNotAuthenticated } from './helper';

const dashboardRouter = Router();

dashboardRouter.get(
  '',
  redirectIfNotAuthenticated,
  dashboard.render,
);

export default dashboardRouter;
