import { type ListCreationAttributes } from 'common/types';
import { List } from 'models';

async function create(listData: ListCreationAttributes) {
  const newList = await List.create(listData);

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
