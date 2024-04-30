import express from 'express';
import router from './routes/index.js';

const app = express();

app.use('/', router);

const PORT = 1245;
app.listen(PORT);

export default app;
