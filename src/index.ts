import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import morgan from 'morgan';
import path from 'path';
import { session, passport, router } from 'middleware';
import sequelize from 'models';
import { serverPort } from 'environment';

const app = express();

// Static Files
app.use(express.static('src/public'));
app.use('/css', express.static('css'));

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(expressEjsLayouts);

// Authentication
app.use(session); // adds user session to req object and sets cookies

app.use(passport.initialize());
app.use(passport.session()); // changes user property on req object from session ID to user object

// Other
app.use(morgan('tiny')); // logs request information
app.use(router);

(async function bootstrap() {
  await sequelize.authenticate();
  console.log('Connected to database');

  app.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}`);
  });
}());
