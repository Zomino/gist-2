import { type Sequelize, DataTypes, Model } from 'sequelize';
import { type Game } from './types';

class GameModel extends Model implements Game {
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

  GameModel.init(attributes, options);
}

export default {
  initialize,
};
