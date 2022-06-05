import { type Request, type Response } from 'express';
import { listService, viewDataService } from 'services';
import createController from './helper/createController';

async function create(request: Request, response: Response) {
  const { body } = request;

  const newList = await listService.create(body);

  response.json(newList);
}

async function render(request: Request, response: Response) {
  // Any must be used as passport user type is empty object
  const user: any = request.user;

  const lists = listService.getAll(user.id);

  const data = viewDataService.lists.getData({ lists });

  response.render('lists.ejs', data);
}

async function renderListPage(request: Request, response: Response) {
  const { listID } = request.params;

  let listName;
  let ordered;
  if (listID) {
    // TODO: Get list data from db and populate variables
  } else {
    listName = 'New List';
    ordered = false;
  }

  const editMode = true;

  const data = {
    listName,
    ordered,
    editMode,
  };

  // editMode?

  response.render('list.ejs', data);
}

const listController = createController({
  create,
  render,
  renderListPage,
});

export default listController;
