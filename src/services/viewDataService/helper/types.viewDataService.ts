import { type ExpressUser, type ListCreationAttributes } from 'common/types';

export type DashboardData = {
  user: ExpressUser,
}

export type ListsData = {
  lists: ListCreationAttributes[],
}
