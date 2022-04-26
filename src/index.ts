import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import { session, passport, router } from 'middleware';
import {
  serverPort,
  databaseHost,
  databasePort,
  databaseName,
} from 'environment';

const app = express();

app.use(express.static('public'));
app.use('/css', express.static('css'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(expressLayouts);
app.set('layout', 'layouts/boilerplate');

app.use(morgan('tiny')); // logs request information

app.use(session); // adds user session to req object and sets cookies

app.use(passport.initialize());
app.use(passport.session()); // changes user property on req object from session ID to user object

app.use(router);

(async function bootstrap() {
  await mongoose.connect(`mongodb://${databaseHost}:${databasePort}/${databaseName}`);
  console.log('Connected to database');

  app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}`);
  });
}());
