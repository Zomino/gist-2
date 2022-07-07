import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';

import { environment, logger } from 'common';
import { passport, router, session } from 'middleware';
import { sequelize } from 'models';

// Log uncaught errors
process.on('uncaughtException', logger.error);
process.on('unhandledRejection', logger.error);

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
// Changes user property on request object from session Id to user object
app.use(passport.session());

app.use(logger.middleware);
app.use(router);

(async function bootstrap() {
  const options = environment.isDevelopment ? { force: true } : {};
  await sequelize.sync(options);
  logger.info('Models synchronized');
  await sequelize.authenticate();
  logger.info('Connected to database');

  const { server } = environment;
  app.listen(server.port, () => {
    logger.info(`Server running on port ${server.port}`);
  });
}());
