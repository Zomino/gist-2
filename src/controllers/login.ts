import { type Request, type Response } from 'express';
import { type LoginPageData } from 'views/types';
import { AuthRoutes } from 'middleware/router/routes';

function render(_: Request, response: Response) {
  const data: LoginPageData = {
    pageHeading: 'Login',
    login: `${AuthRoutes.BASE}${AuthRoutes.LOGIN}`,
  };

  response.render('login.ejs', data);
}

export default {
  render,
};
