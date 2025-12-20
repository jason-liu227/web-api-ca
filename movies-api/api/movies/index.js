import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getMovie, getUpcomingMovies, getMovieImages, getPopularMovies, getTopRatedMovies, getGenres} from '../tmdb-api'; 

const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/:id', asyncHandler(async(req, res) => {
    const {id}= req.params;
    const movie = await getMovie(id);
     console.log('Backend received request for movie ID:', id);
    res.status(200).json(movie);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/movies/:id/images', asyncHandler(async(req, res) => {
    const {id}= req.params;
    const movieImages = await getMovieImages(id);
     console.log('Backend received request for movie ID:', id);
    res.status(200).json(movieImages);
}));

router.get('/popular', asyncHandler(async (req, res) => {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));

router.get('/topRated', asyncHandler(async (req, res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);
}));

router.get('/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));
export default router;
