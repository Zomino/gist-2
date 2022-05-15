import { type Request, type Response, type NextFunction } from 'express';

export type ExpressUser = {
  id?: string,
}

export type RequestHandler = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void

export type Middleware = RequestHandler
