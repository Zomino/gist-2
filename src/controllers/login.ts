import { type RequestHandler } from 'common';
import { viewDataService } from 'services';

const render: RequestHandler = (_, response) => {
  const data = viewDataService.login.getData();

  response.render('login.ejs', data);
};

export default {
  render,
};
