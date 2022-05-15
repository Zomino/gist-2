import { type Sequelize, DataTypes, Model } from 'sequelize';
import { type ListAttributes } from 'common/types';

class List extends Model<ListAttributes> implements ListAttributes {
  declare id: number;
  declare name: string;
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
