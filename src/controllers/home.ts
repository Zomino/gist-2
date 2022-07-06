import { type RequestHandler } from 'common';
import { steamData } from 'services';

import { type HeadData, type User } from './types';

interface DashboardData extends HeadData {
  isAuthenticated: boolean
  username: string
}

const render: RequestHandler = async (request, response) => {
  const isAuthenticated = request.isAuthenticated();

  let data: DashboardData;
  if (isAuthenticated) {
    const user: User = request.user;

    // Update database with latest steam data for current user
    await steamData.updateForOneUser(user.id);

    data = {
      isAuthenticated,
      pageHeading: 'Home',
      username: user.displayName,
    };
  } else {
    data = {
      isAuthenticated,
      pageHeading: '',
      username: '',
    };
  }

  response.render('home.ejs', data);
};

export default {
  render,
};
