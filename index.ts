import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { session, passport, router } from 'middleware';
import {
  serverPort,
  serverURL,
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
  try {
    await mongoose.connect(`mongodb://localhost:${databasePort}/${databaseName}`);
    app.listen(serverPort, () => console.log(`server: ${serverURL}`));
  } catch (error) {
    console.error(error);
  }
}());
