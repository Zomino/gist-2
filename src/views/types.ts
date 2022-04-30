import { ExpressUser } from 'middleware/passport';

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
