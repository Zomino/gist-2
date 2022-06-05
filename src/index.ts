import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import { environment, logger } from 'common';
import {
  passport,
  session,
} from 'middleware';
import { database } from 'models';
import router from 'router';

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
// Changes user property on request object from session ID to user object
app.use(passport.session());

app.use(logger.middleware);
app.use(router);

(async function bootstrap() {
  await database.sync();
  logger.info('Models synchronized');
  await database.authenticate();
  logger.info('Connected to database');

  const { server } = environment;
  app.listen(server.port, () => {
    logger.info(`Server running on port ${server.port}`);
  });
}());
