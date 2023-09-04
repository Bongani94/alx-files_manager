// Server file

import express from 'express';
import router from './routes';

const app = express();
const port = 5000 || process.env.PORT;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
