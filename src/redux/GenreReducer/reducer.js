import {genreSelect} from '../constants';
import {remove} from '../../Helper';
const INITIAL_STATE = {
    tags: []
}

const genreReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case genreSelect.select:
            return{
                ...state,
                tags:[...state.tags, action.payload]
            }
        case genreSelect.removie:
            return {
                ...state,
                tags: remove(state.tags, action.payload)
            }
        default: return state
    }
}

export default  genreReducer;
