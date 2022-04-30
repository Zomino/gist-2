import { type Request, type Response } from 'express';
import { type DashboardPageData } from 'views/types';

function render(request: Request, response: Response) {
  const data: DashboardPageData = {
    user: request.user,
    logout: 'auth/logout',
    pageHeading: 'Dashboard',
  };

  response.render('dashboard.ejs', data);
}

export default {
  render,
};
