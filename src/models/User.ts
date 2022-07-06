import {
  type Sequelize,
  type ModelType,
  DataTypes,
  Model,
} from 'sequelize';

import { type User as UserCreationAttributes } from 'common';

import { type FriendsCreationAttributes } from './types';

// Use of deprecated type required for typing
type FriendsModel = ModelType<FriendsCreationAttributes, FriendsCreationAttributes>;

class User extends Model<UserCreationAttributes> implements UserCreationAttributes {
  declare id: number;
  declare steamId: string;
  declare createdAt: string;
  declare updatedAt: string;
}

// export default function initializeUser(sequelize: Sequelize) {
export default function initializeUser(sequelize: Sequelize, Friends: FriendsModel) {
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
    through: Friends,
    foreignKey: 'userId',
    as: 'user',
  });
  User.belongsToMany(User, {
    through: Friends,
    foreignKey: 'friendId',
    as: 'friend',
  });

  return model;
}

/*
Notes on Associations
- 'foreignKey' binding ensures Sequelize does not create extra fields
- 'as' field allows for smart JOIN queries
*/
