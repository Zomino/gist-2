import { type Sequelize, DataTypes, Model } from 'sequelize';

export type ListAttributes = {
  id?: number,
  name: string
}

class List extends Model<ListAttributes> implements ListAttributes {
  declare id: number;

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

  return List.init(attributes, options);
}

export default {
  initialize,
};
