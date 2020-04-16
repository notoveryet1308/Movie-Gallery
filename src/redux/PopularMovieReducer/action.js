import {popularMovies} from '../constants';

export const setPopularMovie = movies=>({
    type: popularMovies.getPopularMovie,
    payload: movies
})

export const setPage = page =>({
    type: popularMovies.currentpage,
    payload: page
})