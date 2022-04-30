import { type Request, type Response } from 'express';
import { type HomeData } from 'views/types';
import { AuthRoutes } from 'middleware/router';

function render(req: Request, res: Response) {
  const data: HomeData = {
    user: req.user,
    login: `${AuthRoutes.BASE}${AuthRoutes.LOGIN}`,
    logout: `${AuthRoutes.BASE}${AuthRoutes.LOGOUT}`,
    heading: 'Home',
  };

  res.render('home.ejs', data);
}

export default {
  render,
};
