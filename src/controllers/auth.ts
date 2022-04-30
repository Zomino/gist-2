import { type Request, type Response } from 'express';
import { HomeRoutes } from 'middleware/router/routes';

function redirectHome(_: Request, response: Response) {
  response.redirect(HomeRoutes.BASE);
}

function logout(req: Request, response: Response) {
  req.logout();
  response.redirect(HomeRoutes.BASE);
}

export default {
  redirectHome,
  logout,
};
