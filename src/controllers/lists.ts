import { type RequestHandler } from 'common';
import { listService, viewDataService } from 'services';

const create: RequestHandler = async (request, response) => {
  const { body } = request;

  const newList = await listService.create(body);

  response.json(newList);
};

const render: RequestHandler = async (request, response) => {
  // Any must be used as passport user type is empty object
  const user: any = request.user;

  const lists = listService.getAll(user.id);

  const data = viewDataService.lists.getData({ lists });

  response.render('lists.ejs', data);
};

const renderListPage: RequestHandler = async (request, response) => {
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
};

export default {
  create,
  render,
  renderListPage,
};
