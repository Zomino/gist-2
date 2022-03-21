import express from 'express';
import router from 'middleware/router';
import { serverPort as port } from 'environment';

const app = express();

app.set('view-engine', 'ejs');

app.use(router);

app.listen(port, () => console.log(`server: http://localhost:${port}`));
