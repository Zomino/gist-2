import { type RequestHandler } from 'common';
import { viewDataService } from 'services';

const render: RequestHandler = (request, response) => {
  // If user did not exist they would have been redirected
  const data = viewDataService.dashboard.getData({ user: request.user! });
  response.render('dashboard.ejs', data);
};

export default {
  render,
};
