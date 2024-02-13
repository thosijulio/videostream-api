import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(StatusCodes.OK).send(process.env));

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
