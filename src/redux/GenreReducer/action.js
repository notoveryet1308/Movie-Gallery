import {genreSelect} from '../constants';

export const selectGenre = genre =>({
    type: genreSelect.select,
    payload: genre
})

export const removeGenre = genre =>({
    type: genreSelect.removie,
    payload: genre
})