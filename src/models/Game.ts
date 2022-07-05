import { type Sequelize, DataTypes, Model } from 'sequelize';
import { type Game as GameCreationAttributes } from 'common';

class Game extends Model<GameCreationAttributes> implements GameCreationAttributes {
  declare id: number;
  declare appid: number;
  declare name: string;
  declare img_icon_url: string;
  declare createdAt: string;
  declare updatedAt: string;
}

export default function initializeGame(sequelize: Sequelize) {
  const attributes = {
    appid: {
      type: DataTypes.NUMBER,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    img_icon_url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  };

  const options = { sequelize };

  return Game.init(attributes, options);
}
