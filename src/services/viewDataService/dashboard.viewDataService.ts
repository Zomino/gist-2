import { type DashboardData } from './helper/types.viewDataService';

export default {
  getData: (variableData: DashboardData) => ({
    logout: 'auth/logout',
    pageHeading: 'Dashboard',
    ...variableData,
  }),
};
