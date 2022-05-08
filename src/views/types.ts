import { type ExpressUser } from 'middleware/passport/types';
import { type ListAttributes } from 'models';

interface PageData {
  pageHeading: string
}

export interface DashboardPageData extends PageData {
  logout: string
  user?: ExpressUser
}

export interface ListsPageData extends PageData {
  lists: ListAttributes[]
}

export interface LoginPageData extends PageData {
  login: string
}
