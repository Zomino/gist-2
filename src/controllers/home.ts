import { type Request, type Response } from 'express';
import { type HomePageData } from 'views/types';

function render(request: Request, response: Response) {
  const data: HomePageData = {
    user: request.user,
    logout: 'auth/logout',
    pageHeading: 'Home',
  };

  response.render('home.ejs', data);
}

export default {
  render,
};
