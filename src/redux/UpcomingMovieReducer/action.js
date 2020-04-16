import {upComingMovie} from '../constants'

export const setUpcommingMovies = movies =>({
    type:upComingMovie.getUpcomingMovie,
    payload: movies
})

export const setPage = page =>({
    type: upComingMovie.currentpage,
    payload: page
})
export const setRegion = region =>({
    type: upComingMovie.setRegion,
    payload: region
})