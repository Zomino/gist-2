import {
  type Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

import { type tUser as tUserCreationAttributes } from 'common';

import { type tFriendModel } from './types';

class User extends Model<tUserCreationAttributes> implements tUserCreationAttributes {
  declare id: number;
  declare steamId: string;
  declare createdAt: string;
  declare updatedAt: string;
}

export default function initializeUser(sequelize: Sequelize, Friend: tFriendModel) {
  const attributes = {
    steamId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  };
  const options = { sequelize };

  const model = User.init(attributes, options);

  User.belongsToMany(User, {
    through: Friend,
    foreignKey: 'userId',
    otherKey: 'friendId',
    as: 'friend',
  });
  User.belongsToMany(User, {
    through: Friend,
    foreignKey: 'friendId',
    otherKey: 'userId',
    as: 'user',
  });

  return model;
}

/*
Notes on Associations
- 'foreignKey' binding ensures Sequelize does not create extra fields
- 'as' field allows for smart JOIN queries
*/
