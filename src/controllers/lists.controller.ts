import { type Request, type Response } from 'express';
import { type ListsPageData } from 'views/types';
import { listService } from 'services';

function render(request: Request, response: Response) {
  const user: any = request.user; // any must be used as passport user type is empty object

  const lists = listService.getAll(user.id);

  const data: ListsPageData = {
    pageHeading: 'My Lists',
    lists,
  };

  response.render('lists.ejs', data);
}

export default {
  render,
};
