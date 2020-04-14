import {moviedetail} from '../constants';

export const setMoviedetail = movie =>({
    type: moviedetail.currmovie,
    payload: movie
})

export const getSimilarMovie = movies =>({
    type: moviedetail.similarmovie,
    payload: movies
})