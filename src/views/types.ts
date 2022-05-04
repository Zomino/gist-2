import { type ExpressUser } from 'middleware/passport/types';
import { type List } from 'models/types';

interface PageData {
  pageHeading: string
}

export interface DashboardPageData extends PageData {
  logout: string
  user?: ExpressUser
}

export interface ListsPageData extends PageData {
  lists: List[]
}

export interface LoginPageData extends PageData {
  login: string
}
