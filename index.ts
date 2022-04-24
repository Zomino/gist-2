import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { session, passport, router } from 'middleware';
import {
  nodeEnvironment,
  serverPort,
  databaseHost,
  databasePort,
  databaseName,
} from 'environment';

const app = express();

app.set('view-engine', 'ejs');

app.use(morgan('tiny')); // logs request information
app.use(session); // adds user session to req object and sets cookies
app.use(passport.initialize());
app.use(passport.session()); // changes user property on req object from session ID to user object
app.use(router);

(async function bootstrap() {
  await mongoose.connect(`mongodb://${databaseHost}:${databasePort}/${databaseName}`);
  console.log('Connected to database');

  app.listen(serverPort, () => {
    if (nodeEnvironment === 'development') console.log(`Server running at http://localhost:${serverPort}`);
  });
}());
