import { viewDataService } from 'services';
import createController from './helper/createController';

const dashboardController = createController({
  render: (request, response) => {
    // If user did not exist they would have been redirected
    const data = viewDataService.dashboard.getData({ user: request.user! });
    response.render('dashboard.ejs', data);
  },
});

export default dashboardController;
