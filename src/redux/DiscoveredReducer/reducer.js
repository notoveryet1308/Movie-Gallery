import {discoveredMovies} from '../constants';
const INITIAL_STATE = {
    movies: [],
    isLoading: null,
    page: 1
}

const discoveredMoviesReducer = (state= INITIAL_STATE, action)=>{
    switch(action.type){
        case discoveredMovies.getMovie:
            return{
                ...state,
                movies: action.payload,
                isLoading: false
            }
        case discoveredMovies.currentpage:
            return {
                ...state,
                page: action.payload,
                isLoading: true
            }
        case discoveredMovies.setLoadig:
            return{
                ...state,
                isLoading: true
            }
        default: return state
    }
}

export default discoveredMoviesReducer;