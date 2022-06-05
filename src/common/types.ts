import { type Request, type Response, type NextFunction } from 'express';

export type ExpressUser = {
  id?: string,
}

export type RequestHandler = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void

export type GameCreationAttributes = {
  name: string,
}

export type ListCreationAttributes = {
  name: string,
}

export type UserCreationAttributes = {
  steamID: string,
}
