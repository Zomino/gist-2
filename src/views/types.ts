import { type ExpressUser } from 'middleware/passport/types';

interface PageData {
  pageHeading: string
}

export interface LoginPageData extends PageData {
  login: string
}

export interface HomePageData extends PageData {
  logout: string
  user?: ExpressUser
}
