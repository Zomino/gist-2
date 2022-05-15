import { type DashboardData } from './types';

export default {
  getData: (variableData: DashboardData) => ({
    logout: 'auth/logout',
    pageHeading: 'Dashboard',
    ...variableData,
  }),
};
