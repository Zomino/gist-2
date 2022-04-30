import { type Request, type Response, type NextFunction } from 'express';

type Middleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void;

const ifNotAuthenticated: Middleware = (request, response, next) => {
  if (!request.isAuthenticated()) return response.redirect('/login');
  return next();
};

const ifAuthenticated: Middleware = (request, response, next) => {
  if (request.isAuthenticated()) return response.redirect('/');
  return next();
};

const redirect = {
  ifAuthenticated,
  ifNotAuthenticated,
};

export default redirect;
