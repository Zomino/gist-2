import { type Request, type Response, type NextFunction } from 'express';

// Server
export type ExpressUser = {
  id?: string,
}

export type RequestHandler = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void

// Data
export type Game = {
  appid: number,
  name: string,
  img_icon_url: string,
}

export type User = {
  steamId: string,
}
