import { type RequestHandler } from 'common';

import authHandlers from './auth';
import homeHandlers from './home';
import listHandlers from './lists';

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
export const home = createController(homeHandlers);
export const lists = createController(listHandlers);
