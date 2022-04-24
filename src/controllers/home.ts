import { type Request, type Response } from 'express';
import { AuthRoutes } from 'middleware/router';

function render(req: Request, res: Response) {
  const data = {
    user: req.user,
    login: `${AuthRoutes.BASE}${AuthRoutes.LOGIN}`,
    logout: `${AuthRoutes.BASE}${AuthRoutes.LOGOUT}`,
  };

  res.render('home.ejs', data);
}

export default {
  render,
};
