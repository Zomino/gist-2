import { type Request, type Response } from 'express';
import { HomeRoutes } from 'middleware/router';

function redirectHome(_: Request, res: Response) {
  res.redirect(HomeRoutes.BASE);
}

function logout(req: Request, res: Response) {
  req.logout();
  res.redirect(HomeRoutes.BASE);
}

export default {
  redirectHome,
  logout,
};
