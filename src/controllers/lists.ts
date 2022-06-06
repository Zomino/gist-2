import { type RequestHandler } from 'common';
import { List } from 'models';

import { type HeadData } from './types';

interface ListsData extends HeadData {
  lists: string[]
}

const create: RequestHandler = async (request, response) => {
  const { body } = request;

  const newList = await List.create(body);

  response.json(newList);
};

const render: RequestHandler = async (request, response) => {
  const data: ListsData = {
    pageHeading: 'Lists',
    lists: [],
  };

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
