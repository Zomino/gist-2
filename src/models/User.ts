import {
  type Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

import { type iUser, type tUserCreationAttributes } from 'common';

import { type tFriendModel } from './types';

/*
Model generic type adds all read properties on the model type
Implements type informs compiler that property exists on instances
Both must be present to avoid typing errors
*/
class User extends Model<iUser, tUserCreationAttributes> implements iUser {
  // Custom
  declare username: string;
  declare steamId: string;
  declare avatarURL: string;
  declare profileURL: string;

  // Auto-generated
  declare id: number;
  declare createdAt: string;
  declare updatedAt: string;
  declare friends: iUser[];
}

export default function initializeUser(sequelize: Sequelize, Friend: tFriendModel) {
  const attributes = {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    steamId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    avatarURL: DataTypes.STRING,
    profileURL: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
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
