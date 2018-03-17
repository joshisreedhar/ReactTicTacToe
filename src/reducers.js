import {PLAYER_PLAYED} from './actions';
import {togglePlayer} from './helper';

const rootReducer = function(state,action){
    switch(action.type){
        case PLAYER_PLAYED:
            const nextActivePlayer = togglePlayer(state);
            return Object.assign({},state,{activePlayer:nextActivePlayer});
        default:
            return state;
    }
}

export default rootReducer;