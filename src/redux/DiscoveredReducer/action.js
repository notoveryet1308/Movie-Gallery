import {discoveredMovies} from '../constants';

export const getDiscoveredMovie = movies =>({
    type: discoveredMovies.getMovie,
    payload: movies
})
export const setPage = page =>({
    type: discoveredMovies.currentpage,
    payload: page
})

export const setLoading = ()=>({
   type: discoveredMovies.setLoadig
})