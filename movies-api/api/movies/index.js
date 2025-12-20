import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getMovie, getUpcomingMovies} from '../tmdb-api'; 

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

export default router;
