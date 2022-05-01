import { type Sequelize, DataTypes, Model } from 'sequelize';

class User extends Model {
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

  User.init(attributes, options);
}

export default {
  initialize,
};
