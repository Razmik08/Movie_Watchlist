import express from 'express'
import { 
    returnAllMovies,
    returnMoviesById,
    returnCreatedMovie,
    returnDeletedMovie,
    returnUpdatedMovie,
    returnWatched
    }
from '../controllers/moviesControllers.js';


import { checkMovies }

from '/home/razmik/Desktop/Movie_Watchlist/middlewares/checkMovie.js';


export const moviesRouter = express.Router()


moviesRouter.get("/", returnAllMovies);
moviesRouter.get("/:id", returnMoviesById);
moviesRouter.post("/", checkMovies, returnCreatedMovie);
moviesRouter.delete("/:id", returnDeletedMovie);
moviesRouter.put("/:id",checkMovies, returnUpdatedMovie);
moviesRouter.patch("/:id/change", returnWatched);

