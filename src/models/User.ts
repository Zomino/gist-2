import { type Sequelize, DataTypes, Model } from 'sequelize';
import { type User } from './types';

class UserModel extends Model implements User {
  declare steamID: string;
}

function initialize(sequelize: Sequelize) {
  const attributes = {
    steamID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const options = { sequelize };

  UserModel.init(attributes, options);
}

export default {
  initialize,
};
