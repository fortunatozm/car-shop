import express from 'express';
import MiddwareError from './Middwares/MiddwareError';
import routes from './Routes/Routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(MiddwareError.err);

export default app;
