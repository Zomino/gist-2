import { type RequestHandler } from 'common/types';
import { type Controller } from '../types.controller';

export default function createController(controller: Controller): Controller {
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
