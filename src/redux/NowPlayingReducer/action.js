import {nowplaying} from '../constants';
export const getMovies = movies=> ({
    type: nowplaying.getallmovie,
    payload: movies
});

export const setPage = page =>({
    type: nowplaying.currentpage,
    payload: page
});


