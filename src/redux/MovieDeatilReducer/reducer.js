import {moviedetail} from  '../constants';
const INITIAL_STATE = {
    movie: null,
    similarmovie: null,
    similarmovieloading: null
}

const movieDetailReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case moviedetail.currmovie:
            return {
                ...state,
                movie: action.payload,
                similarmovieloading: true
            }
        case moviedetail.similarmovie:
            return{
                ...state,
                similarmovie: action.payload,
                similarmovieloading: false
            }
         default:
             return state   
    }
}

export default movieDetailReducer;