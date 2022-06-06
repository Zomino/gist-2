import { type Sequelize, DataTypes, Model } from 'sequelize';

export type UserCreationAttributes = {
  steamID: string,
}

class User extends Model<UserCreationAttributes> implements UserCreationAttributes {
  declare id: number;
  declare steamID: string;
  declare createdAt: string;
  declare updatedAt: string;
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
