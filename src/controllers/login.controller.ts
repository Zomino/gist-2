import { type LoginPageData } from 'views/types';
import { wrapRouteHandler } from './helper';

const render = wrapRouteHandler((_, response) => {
  const data: LoginPageData = {
    pageHeading: 'Login',
    login: '/auth/login',
  };

  response.render('login.ejs', data);
});

export default {
  render,
};
