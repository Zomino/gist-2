import express from 'express';
import { serverPort as port } from 'environment';

const app = express();

app.listen(port, () => console.log(`server: http://localhost:${port}`));
