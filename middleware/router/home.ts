import { Router } from 'express';
import { home } from 'controllers';

export enum HomeRoutes {
  BASE = '/',
}

const homeRouter = Router();

homeRouter.get('', home.render);

export default homeRouter;
