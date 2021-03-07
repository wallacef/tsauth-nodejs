require('dotenv').config();
import 'reflect-metadata';
import express from 'express';
import './database/connect';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.listen(process.env.PORT, () => console.log(`Server started at http://localhost:${process.env.PORT}`));