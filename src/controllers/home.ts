import { type tRequestHandler } from 'common';
import { steamData } from 'services';

import { type tHeadData, type tUser } from './types';

interface iDashboardData extends tHeadData {
  isAuthenticated: boolean
  username: string
}

const render: tRequestHandler = async (request, response) => {
  const isAuthenticated = request.isAuthenticated();

  let data: iDashboardData;
  if (isAuthenticated) {
    const user: tUser = request.user;

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
