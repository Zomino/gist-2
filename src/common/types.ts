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

export type GameAttributes = {
  name: string,
}

export type ListAttributes = {
  // id?: number,
  name: string,
}

export type UserAttributes = {
  steamID: string,
}
