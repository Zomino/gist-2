import { type ModelType } from 'sequelize';
import { type tFriend } from 'common';

// Use of deprecated type required for typing
export type tFriendModel = ModelType<tFriend, tFriend>;
