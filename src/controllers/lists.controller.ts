import { type Request, type Response } from 'express';
import { type ListsPageData } from 'views/types';
import { type ListAttributes } from 'models';
import { listService } from 'services';

function create(request: Request, response: Response) {
  const body: ListAttributes = request.body;

  const newList = listService.create(body);

  response.json(newList);
}

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
  create,
  render,
};
