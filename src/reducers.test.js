import rootReducer from './reducers';
import {handlePlayerMove, PLAYER_PLAYED} from './actions';

it("should change active player when CHANGE_PLAYER is dispatched", ()=>{
    const state = {};
    const action ={};

    const newState = handlePlayerMove(state, action);
    const expectedState = {};

    expect(JSON.stringify(newState.activeplayer)).toEqual(JSON.stringify());
});