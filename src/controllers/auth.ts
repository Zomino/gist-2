import { type Request, type Response } from 'express';

function redirectHome(_: Request, response: Response) {
  response.redirect('/');
}

function logout(req: Request, response: Response) {
  req.logout();
  response.redirect('/');
}

export default {
  redirectHome,
  logout,
};
