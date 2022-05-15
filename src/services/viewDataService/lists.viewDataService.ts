import { type ListsData } from './types.viewDataService';

export default {
  getData: (variableData: ListsData) => ({
    pageHeading: 'My Lists',
    ...variableData,
  }),
};
