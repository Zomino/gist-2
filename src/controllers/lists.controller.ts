import { listService, viewDataService } from 'services';
import createController from './helper/createController';

const listController = createController({
  create: async (request, response) => {
    const { body } = request;

    const newList = await listService.create(body);

    response.json(newList);
  },

  render: (request, response) => {
    // Any must be used as passport user type is empty object
    const user: any = request.user;

    const lists = listService.getAll(user.id);

    const data = viewDataService.lists.getData({ lists });

    response.render('lists.ejs', data);
  },
});

export default listController;
