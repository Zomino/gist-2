import { viewDataService } from 'services';
import createController from './helper/createController';

const loginController = createController({
  render: (_, response) => {
    const data = viewDataService.login.getData();

    response.render('login.ejs', data);
  },
});

export default loginController;
