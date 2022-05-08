import { type ListAttributes, sequelize } from 'models';

async function create(listData: ListAttributes) {
  const newList = await sequelize.models.List.create(listData);

  // const newList = list.create(listData as any);

  return newList;
}

function getAll(steamID: string) {
  /*
  - Get list of unique game IDs across all lists related to user
  - Get game data from API
  - Combine database and API data
  */
  return [];
}

export default {
  create,
  getAll,
};
