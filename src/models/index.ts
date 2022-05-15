import sequelize from './sequelize';
import initializeGame from './Game';
import initializeList from './List';
import initializeUser from './User';

export const database = sequelize;
export const Game = initializeGame(sequelize);
export const List = initializeList(sequelize);
export const User = initializeUser(sequelize);

/*
Notes on Models
- Extending (e.g. class List extends Model<ListAttributes>)
enables type-checking when passing data to the create method
- Implementing interfaces enables type-checking when calling
init method
- Class member declaration is necessary to allow property access
on instances
*/
