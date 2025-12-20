import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getMovie, getUpcomingMovies, getMovieImages, getPopularMovies} from '../tmdb-api'; 

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


export default router;
