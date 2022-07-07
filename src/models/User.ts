import {
  type Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

import { type tUser as tUserCreationAttributes } from 'common';

import { type tFriendModel } from './types';

class User extends Model<tUserCreationAttributes> implements tUserCreationAttributes {
  // Auto-generated
  declare id: number;
  declare createdAt: string;
  declare updatedAt: string;

  // Custom
  declare avatarURL: string;
  declare profileURL: string;
  declare steamId: string;
  declare username: string;

  // For joins
  declare friends: string[];
}

export default function initializeUser(sequelize: Sequelize, Friend: tFriendModel) {
  const attributes = {
    avatarURL: DataTypes.STRING,
    profileURL: DataTypes.STRING,
    steamId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  const options = { sequelize };

  const model = User.init(attributes, options);

  User.belongsToMany(User, {
    through: Friend,
    foreignKey: 'userId',
    otherKey: 'friendId',
    as: 'friends',
  });
  User.belongsToMany(User, {
    through: Friend,
    foreignKey: 'friendId',
    otherKey: 'userId',
    as: 'users',
  });

  return model;
}

/*
Notes on Associations
- 'foreignKey' binding ensures Sequelize does not create extra fields
- 'as' field allows for smart JOIN queries
*/
