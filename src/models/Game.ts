import { type Sequelize, DataTypes, Model } from 'sequelize';
import { type GameCreationAttributes } from 'common/types';

class Game extends Model<GameCreationAttributes> implements GameCreationAttributes {
  declare id: number;
  declare name: string;
  declare createdAt: string;
  declare updatedAt: string;
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
