import { type Request, type Response } from 'express';
import { type HomePageData } from 'views/types';
import { AuthRoutes } from 'middleware/router/routes';

function render(request: Request, response: Response) {
  const data: HomePageData = {
    user: request.user,
    logout: `${AuthRoutes.BASE}${AuthRoutes.LOGOUT}`,
    pageHeading: 'Home',
  };

  response.render('home.ejs', data);
}

export default {
  render,
};
