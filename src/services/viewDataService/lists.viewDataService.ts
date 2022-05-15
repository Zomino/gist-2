import { type ListsData } from './helper/types.viewDataService';

export default {
  getData: (variableData: ListsData) => ({
    pageHeading: 'My Lists',
    ...variableData,
  }),
};
