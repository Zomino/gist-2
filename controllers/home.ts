import { type Request, type Response } from 'express';
import { Routes } from 'middleware/router';

export function render(req: Request, res: Response) {
  const data = {
    user: req.user,
    login: Routes.Login,
    logout: Routes.Logout,
  };

  res.render('home.ejs', data);
}

export default {
  render,
};
