import { type RequestHandler } from 'common';
import { type HeadData, type User } from './types';

interface DashboardData extends HeadData {
  username: string
}

const render: RequestHandler = (request, response) => {
  const isAuthenticated = request.isAuthenticated();

  const data: DashboardData = {
    pageHeading: '',
    username: '',
  };
  const user: User = request.user;

  if (isAuthenticated) {
    data.pageHeading = 'Home';
    data.username = user.displayName;
  }

  response.render('home.ejs', data);
};

export default {
  render,
};
