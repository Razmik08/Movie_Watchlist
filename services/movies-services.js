import { readFile, writeFile } from 'fs/promises'
import uniqid from 'uniqid'

export const getMovies = async () => {
    const data = await readFile("./data/movies.json", "utf-8");
    if(!data){
        return [];
    }

    return JSON.parse(data)
}

export const getMovie = async (id) => {
    const movies = await getMovies();
    return movies.find(movie => movie.id == id);
}

export const createMovie = async (movie) => {
    const movies = await getMovies();
    const newMovie = { ...movie, id: uniqid() };
    movies.push(newMovie);
    await writeFile("./data/movies.json", JSON.stringify(movies, null, 2));
    return newMovie;
}

export const deleteMovie = async (id) => {
    const movies = await getMovies();
    const remaining = movies.filter(movie => movie.id != id);
    if(remaining.length === movies.length){
        return false
    }

    await writeFile("./data/movies.json", JSON.stringify(remaining, null, 2));

    return true;

}

export const updateMovie = async (id, data) => {
    const movies = await getMovies();
    const i = movies.findIndex(movie => movie.id == id);
    if( i === -1) return null;
    movies[i] = { ...data, id};
    
    await writeFile("./data/movies.json", JSON.stringify(movies, null, 2));
    return movies[i];
}

export const toggleWatched = async(id) => {
    const movies = await getMovies();
    const i = movies.findIndex(movie => movie.id == id);
    if(i === -1) return null;
    movies[i].watched = !movies[i].watched;
    await writeFile("./data/movies.json", JSON.stringify(movies, null, 2));
    return movies[i];

}