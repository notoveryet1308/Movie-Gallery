import {searchMovies} from '../constants';

const INITIAL_STATE = {
    movies: [],
    isLoading: null

}

const searchReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case searchMovies.getMovie:
            return {
                ...state,
                movies: action.payload,
                isLoading: false
            }
        case searchMovies.setLoadig:
            return{
                ...state,
                isLoading: action.payload
            } 
        default: return state
    }
}

export default searchReducer;