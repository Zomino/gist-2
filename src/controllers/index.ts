import { type RequestHandler } from 'common';

import authHandlers from './auth';
import dashboardHandlers from './dashboard';
import listHandlers from './lists';
import loginHandlers from './login';

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
