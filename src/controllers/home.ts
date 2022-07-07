import { type tRequestHandler, tUser } from 'common';
import { steamData } from 'services';

import { type tHeadData } from './types';

interface iDashboardData extends tHeadData {
  isAuthenticated: boolean
  username: string
}

const render: tRequestHandler = async (request, response) => {
  const isAuthenticated = request.isAuthenticated();

  let data: iDashboardData;
  if (isAuthenticated) {
    const user = request.user as tUser;

    // Update database with latest steam data for current user
    await steamData.updateForOneUser(user.steamId);

    data = {
      isAuthenticated,
      pageHeading: 'Home',
      username: user.username,
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
