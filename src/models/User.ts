import { type Sequelize, DataTypes, Model } from 'sequelize';
import { type UserAttributes } from 'common/types';

class User extends Model<UserAttributes> implements UserAttributes {
  declare id: number;
  declare steamID: string;
}

export default function initializeUser(sequelize: Sequelize) {
  const attributes = {
    steamID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const options = { sequelize };

  return User.init(attributes, options);
}
