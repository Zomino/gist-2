import { type RequestHandler } from 'common/types';

/**
 * Wraps a route handler with a try catch to catch asynchronous errors.
 * @param routeHandler A route handler function to wrap.
 * @returns A wrapped route handler function.
 */
export function wrapRouteHandler(routeHandler: RequestHandler): RequestHandler {
  const wrappedRouteHandler: RequestHandler = (request, response, next) => {
    try {
      routeHandler(request, response, next);
    } catch (err) {
      console.error(err);
      next(err);
    }
  };

  return wrappedRouteHandler;
}

export default {};
