import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import { serverPort } from 'environment';
import {
  appLogger,
  router,
  passport,
  session,
} from 'middleware';
import { sequelize } from 'models';
import { logger } from 'services';

// Log uncaught errors
process.on('uncaughtException', (error) => { logger.error(error); });
process.on('unhandledRejection', (error) => { logger.error(error); });

const app = express();

app.use(express.static('src/public'));
app.use('/css', express.static('css'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(expressEjsLayouts);

// Adds user session to request object and sets cookies
app.use(session);

app.use(passport.initialize());
app.use(express.json());
// Changes user property on request object from session ID to user object
app.use(passport.session());

app.use(appLogger);
app.use(router);

(async function bootstrap() {
  await sequelize.sync();
  logger.info('Models synchronized');
  await sequelize.authenticate();
  logger.info('Connected to database');

  app.listen(serverPort, () => {
    logger.info(`Server running on port ${serverPort}`);
  });
}());
