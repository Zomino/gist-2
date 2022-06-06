import { type RequestHandler } from 'common';

import authHandlers from './auth.controller';
import dashboardHandlers from './dashboard.controller';
import listHandlers from './lists.controller';
import loginHandlers from './login.controller';

type Controller = {
  [key: string]: RequestHandler,
}

function createController(controller: Controller): Controller {
  const routes = Object.entries(controller);
  routes.forEach(([name, handler]) => {
    const wrappedHandler: RequestHandler = (request, response, next) => {
      try {
        handler(request, response, next);
      } catch (err) {
        console.error(err);
        next(err);
      }
    };

    controller[name] = wrappedHandler;
  });

  return controller;
}

export const auth = createController(authHandlers);
export const dashboard = createController(dashboardHandlers);
export const lists = createController(listHandlers);
export const login = createController(loginHandlers);
