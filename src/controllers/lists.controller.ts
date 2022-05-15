import { type ListsPageData } from 'views/types';
import { type ListAttributes } from 'models';
import { listService } from 'services';
import { wrapRouteHandler } from './helper';

const create = wrapRouteHandler((request, response) => {
  const body: ListAttributes = request.body;

  const newList = listService.create(body);

  response.json(newList);
});

const render = wrapRouteHandler((request, response) => {
  // Any must be used as passport user type is empty object
  const user: any = request.user;

  const lists = listService.getAll(user.id);

  const data: ListsPageData = {
    pageHeading: 'My Lists',
    lists,
  };

  response.render('lists.ejs', data);
});

export default {
  create,
  render,
};
