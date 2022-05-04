import { type Sequelize, DataTypes, Model } from 'sequelize';
import { type List } from './types';

class ListModel extends Model implements List {
  declare name: string;
}

function initialize(sequelize: Sequelize) {
  const attributes = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  };

  const options = { sequelize };

  ListModel.init(attributes, options);
}

export default {
  initialize,
};
