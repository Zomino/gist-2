import { type Request, type Response } from 'express';
import { Routes } from 'middleware/router';

export function redirectHome(_: Request, res: Response) {
  res.redirect(Routes.Home);
}

export function logout(req: Request, res: Response) {
  req.logout();
  res.redirect(Routes.Home);
}

export default {
  redirectHome,
  logout,
};
