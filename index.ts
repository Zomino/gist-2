import express from 'express';
import morgan from 'morgan';
import { session, passport, router } from 'middleware';
import { serverPort as port, serverURL as URL } from 'environment';

const app = express();

app.set('view-engine', 'ejs');

app.use(morgan('tiny')); // logs request information
app.use(session); // adds user session to req object and sets cookies
app.use(passport.initialize());
app.use(passport.session()); // changes user property on req object from session ID to user object
app.use(router);

app.listen(port, () => console.log(`server: ${URL}`));
