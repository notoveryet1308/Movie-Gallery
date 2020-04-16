import {topRatedMovies} from '../constants'
const INITIAL_STATE = {
    movies: [],
    topRatedMovieLoading: true,
    page:1
}

const topRatedReducer = (state=INITIAL_STATE, action)=>{
  switch(action.type){
      case topRatedMovies.getTopRatedMovie:
          return{
              ...state,
              movies: action.payload,
              topRatedMovieLoading: false
          }
     case topRatedMovies.currentpage:
         return {
             ...state,
             page: action.payload,
             topRatedMovieLoading: true
         }
    default: return state
  }
}
export default topRatedReducer;