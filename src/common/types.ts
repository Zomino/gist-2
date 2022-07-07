import { type Request, type Response, type NextFunction } from 'express';

// Server
export type tRequestHandler = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void

// Data
export type tGame = {
  appid: number,
  name: string,
  img_icon_url: string,
}

export type tUser = {
  avatarURL: string,
  profileURL: string,
  steamId: string,
  username: string,
}
