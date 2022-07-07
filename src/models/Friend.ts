import { type Sequelize, DataTypes, Model } from 'sequelize';

import { type tFriend } from 'common';

class Friend extends Model<tFriend> implements tFriend {
  declare userId: number;
  declare friendId: number;
}

export default function initializeFriend(sequelize: Sequelize) {
  const attributes = {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    friendId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
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
