import { type Sequelize, DataTypes, Model } from 'sequelize';
import { type ListCreationAttributes } from 'common/types';

class List extends Model<ListCreationAttributes> implements ListCreationAttributes {
  declare id: number;
  declare name: string;
  declare createdAt: string;
  declare updatedAt: string;
}

export default function initializeList(sequelize: Sequelize) {
  const attributes = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  };

  const options = { sequelize };

  return List.init(attributes, options);
}
