import {popularMovies} from '../constants';

const INITIAL_STATE = {
    movies: [],
    popularMovieLoading: true,
    page: 1
}

const popularMovieReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case popularMovies.getPopularMovie:
            return{
                ...state,
                movies: action.payload,
                popularMovieLoading: false
            }
        case popularMovies.currentpage:
            return{
                ...state,
                page: action.payload,
                popularMovieLoading: true
            }
        default:
            return state

    }
}

export default popularMovieReducer;