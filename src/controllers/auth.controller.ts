import createController from './helper/createController';

const authController = createController({
  redirectHome: (_, response) => {
    response.redirect('/');
  },

  logout: (request, response) => {
    request.logout();
    response.redirect('/');
  },
});

export default authController;
