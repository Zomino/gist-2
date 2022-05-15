import { type ListsData } from './types';

export default {
  getData: (variableData: ListsData) => ({
    pageHeading: 'My Lists',
    ...variableData,
  }),
};
