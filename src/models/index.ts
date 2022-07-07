import { Sequelize, type Dialect } from 'sequelize';

import { environment } from 'common';

import initializeFriend from './Friend';
import initializeGame from './Game';
import initializeList from './List';
import initializeUser from './User';

const { database } = environment;

const options = {
  host: database.host,
  dialect: database.dialect as Dialect,
  logging: false,
  port: Number(database.port),
  pool: {
    max: 5,
    idle: 10000,
  },
};

export const sequelize = new Sequelize(
  database.name,
  database.user,
  database.password,
  options,
);

export const Friend = initializeFriend(sequelize);
// export const Game = initializeGame(sequelize);
export const List = initializeList(sequelize);
export const User = initializeUser(sequelize, Friend);

export { type tFriendModel } from './types';

/*
Notes on Models
- Extending (e.g. class List extends Model<ListAttributes>)
enables type-checking when passing data to the create method
- Implementing interfaces enables type-checking when calling
init method
- Class member declaration is necessary to allow property access
on instances
*/
