import { type Sequelize, DataTypes, Model } from 'sequelize';

import { type tFriendCreationAttributes } from './types';

class Friend extends Model<tFriendCreationAttributes> implements tFriendCreationAttributes {
  declare userId: number;
  declare friendId: number;
}

export default function initializeFriend(sequelize: Sequelize) {
  const attributes = {
    userId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    friendId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  };
  const options = {
    sequelize,
    timestamps: false,
  };

  return Friend.init(attributes, options);
}
