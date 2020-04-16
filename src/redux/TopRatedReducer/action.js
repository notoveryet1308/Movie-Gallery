import {topRatedMovies} from '../constants';

export const setTopRatedMovies = movies => ({
    type: topRatedMovies.getTopRatedMovie,
    payload: movies
})

export const setPage = page=>({
    type: topRatedMovies.currentpage,
    payload: page
})