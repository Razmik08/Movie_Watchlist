import { getMovies, getMovie, createMovie, deleteMovie, updateMovie, toggleWatched } from "/home/razmik/Desktop/Movie_Watchlist/services/movies-services.js"

export const returnAllMovies = async (req, res) => {
    const movies = await getMovies();
    res.send({ ok:true, movies })
}

export const returnMoviesById = async (req,res) => {
    const { id } = req.params
    const movie = await getMovie(id);
    if(!movie){
        return res.status(404).send({ ok:false, message:"Not found"})
    }
    res.send({ ok:true, movie });
}

export const returnCreatedMovie = async (req,res) => {
    const movie = await createMovie(req.body);
    res.status(201).send({ ok: true, movie });
}

export const returnDeletedMovie = async (req,res) => {
    const { id } = req.params 
    const deleted = await deleteMovie(id);
    if(!deleted){
        return res.status(404).send({ ok:false, message:"Movie not found"});
    }
    res.send({ ok: true, message: "Movie deleted successfully" });
}

export const returnUpdatedMovie = async (req,res) => {
    const { id } = req.params;
    const updatedMovie = await updateMovie(id, req.body);
    if(!updatedMovie){
        return res.status(404).send({ ok:false, message:"Movie not found"})
    }
    res.send({ ok:true, updatedMovie})
}

export const returnWatched = async (req,res) => {
    const { id } = req.params
    const watched = await toggleWatched(id);
    if(!watched){
        return res.status(404).send({ ok:false, message:"Movie not found"})
    }
    res.send({ ok:true, watched})
}

