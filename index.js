import express from 'express';
import "dotenv/config.js";
import cors from 'cors';
import indexRouter from './routes/index.js';
import { dbConnection } from './config/db.config.js';

const app = express();
app.use(cors());

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);

const PORT = process.env.PORT ?? 8085;

app.listen(PORT, () => {
   console.log(`App is running at port ${PORT}`)
})



