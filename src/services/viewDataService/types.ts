import { type ExpressUser, type ListAttributes } from 'common/types';

export type DashboardData = {
  user: ExpressUser,
}

export type ListsData = {
  lists: ListAttributes[],
}
