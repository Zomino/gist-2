import { type RouteHandler } from './types';

/**
 * Wraps a route handler with a try catch to catch asynchronous errors.
 * @param routeHandler A route handler function to wrap.
 * @returns A wrapped route handler function.
 */
export default function wrapRouteHandler(routeHandler: RouteHandler): RouteHandler {
  const wrappedRouteHandler: RouteHandler = (request, response, next) => {
    try {
      routeHandler(request, response, next);
    } catch (err) {
      console.error(err);
      next(err);
    }
  };

  return wrappedRouteHandler;
}
