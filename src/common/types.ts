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

// Creation attributes are the properties required in model create methods
export type tFriend = {
  userId: number,
  friendId: number,
}

export type tUserCreationAttributes = {
  username: string,
  steamId: string,
  avatarURL: string,
  profileURL: string,
}

export interface iUser extends tUserCreationAttributes {
  id: number
  createdAt: string
  updatedAt: string
}
