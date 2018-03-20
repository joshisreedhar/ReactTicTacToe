import {PLAYER_PLAYED} from './actions';
import {togglePlayer} from './helper';
import {get} from 'lodash';

const rootReducer = function(state,action){
    switch(action.type){
        case PLAYER_PLAYED:
            const nextActivePlayer = togglePlayer(state);
            let currentPlayer = state.players.find(function(player){return player.id === state.activePlayer.id});
            let cells = get(currentPlayer, 'cells',[]);
            cells.push(action.cellIndex);
            currentPlayer.cells = cells;
            return Object.assign({},state,{activePlayer:nextActivePlayer});
        default:
            return state;
    }
}

export default rootReducer;