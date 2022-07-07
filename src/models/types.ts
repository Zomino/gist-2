import { type ModelType } from 'sequelize';

export type tFriendCreationAttributes = {
  userId: number,
  friendId: number,
}

// Use of deprecated type required for typing
export type tFriendModel = ModelType<tFriendCreationAttributes, tFriendCreationAttributes>;
