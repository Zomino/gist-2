import { type RequestHandler } from 'common';

const logout: RequestHandler = (request, response) => {
  request.logout();
  response.redirect('/');
};

const redirectHome: RequestHandler = (_, response) => {
  response.redirect('/');
};

export default {
  logout,
  redirectHome,
};
