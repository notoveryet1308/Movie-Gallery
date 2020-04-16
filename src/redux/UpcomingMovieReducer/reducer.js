import {upComingMovie} from '../constants';

const INITIAL_STATE = {
    movies: [],
    region: 'in',
    page: 1,
    movieLoading: true
}

const upcomingMovieReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case upComingMovie.getUpcomingMovie:
            return {
                ...state,
                movies: action.payload,
                movieLoading: false
            }
        case upComingMovie.currentpage:
            return{
                ...state,
                page: action.payload,
                movieLoading: true
            }
        case upComingMovie.setRegion:
            return {
                ...state,
                region: action.payload,
                page: 1,
                movieLoading: true
            }
        default: return state    
    }
}

export default upcomingMovieReducer;