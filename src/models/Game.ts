import { type Sequelize, DataTypes, Model } from 'sequelize';
import { type GameAttributes } from 'common/types';

class Game extends Model<GameAttributes> implements GameAttributes {
  declare id: number;
  declare name: string;
}

export default function initializeGame(sequelize: Sequelize) {
  const attributes = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  };

  const options = { sequelize };

  return Game.init(attributes, options);
}
