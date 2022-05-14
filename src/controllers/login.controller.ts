import { type LoginPageData } from 'views/types';
import wrapRouteHandler from './helper/wrapRouteHandler';

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
