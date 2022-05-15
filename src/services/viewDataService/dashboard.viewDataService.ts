import { type DashboardData } from './types.viewDataService';

export default {
  getData: (variableData: DashboardData) => ({
    logout: 'auth/logout',
    pageHeading: 'Dashboard',
    ...variableData,
  }),
};
