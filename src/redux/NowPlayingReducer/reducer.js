import {
    nowplaying
} from '../constants';
const INITIAL_STATE = {
    allMovies: [],
    page: 1, 
    isLoading: true
}
const nowplayingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case nowplaying.getallmovie:
            return {
                ...state,
                allMovies: action.payload,
                isLoading: false
            }
        case nowplaying.currentpage:
            return{
                ...state,
                page: action.payload,
                isLoading: true
            }
             default:
                return state;
    }
}

export default nowplayingReducer;