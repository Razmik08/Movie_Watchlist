import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import { logger } from './middlewares/logger.js'
import { moviesRouter } from './router/movies.js'
import { notfound,errorHandler } from './middlewares/notfound.js'

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

app.listen(5000, () => console.log("server started..."));

app.use(express.json()); //?
app.use(logger);
app.use("/movies", moviesRouter);
app.use(notfound);
app.use(errorHandler);
