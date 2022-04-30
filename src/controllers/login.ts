import { type Request, type Response } from 'express';
import { type LoginPageData } from 'views/types';

function render(_: Request, response: Response) {
  const data: LoginPageData = {
    pageHeading: 'Login',
    login: '/auth/login',
  };

  response.render('login.ejs', data);
}

export default {
  render,
};
