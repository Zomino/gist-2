import { type Request, type Response, type NextFunction } from 'express';

export type ExpressUser = {
  id?: string,
}

export type Game = {
  appid: number,
  name: string,
  img_icon_url: string,
}

export type RequestHandler = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void

// type User must be any as user type used by Passport is an empty object
export type User = any;
