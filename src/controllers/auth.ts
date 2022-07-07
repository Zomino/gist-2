import { type tRequestHandler } from 'common';

const logout: tRequestHandler = (request, response) => {
  request.logout();
  response.redirect('/');
};

const redirectHome: tRequestHandler = (_, response) => {
  response.redirect('/');
};

export default {
  logout,
  redirectHome,
};
