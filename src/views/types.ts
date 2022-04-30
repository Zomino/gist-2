import { ExpressUser } from 'middleware';

export interface HomeData {
  heading: string
  login: string
  logout: string
  user?: ExpressUser
}
