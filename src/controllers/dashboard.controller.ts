import { type DashboardPageData } from 'views/types';
import wrapRouteHandler from './helper/wrapRouteHandler';

const render = wrapRouteHandler((request, response) => {
  const data: DashboardPageData = {
    user: request.user,
    logout: 'auth/logout',
    pageHeading: 'Dashboard',
  };

  response.render('dashboard.ejs', data);
});

export default {
  render,
};
