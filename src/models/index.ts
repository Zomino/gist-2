import sequelize from './sequelize';
import initializeGame from './Game';
import initializeList from './List';
import initializeUser from './User';

export const database = sequelize;
export const Game = initializeGame(sequelize);
export const List = initializeList(sequelize);
export const User = initializeUser(sequelize);
