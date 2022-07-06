import { type Sequelize, DataTypes, Model } from 'sequelize';

import { type FriendsCreationAttributes } from './types';

class Friend extends Model<FriendsCreationAttributes> implements FriendsCreationAttributes {
  declare userId: number;
  declare friendId: number;
}

export default function initializeFriends(sequelize: Sequelize) {
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
