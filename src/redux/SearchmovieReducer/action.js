import {searchMovies} from '../constants';

export const getMovies = movies =>({
    type: searchMovies.getMovie,
    payload: movies
})

export const setLoading = ()=>({
    type: searchMovies.setLoadig,
    payload: true
});