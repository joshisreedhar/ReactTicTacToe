import rootReducer from './reducers';
import {handlePlayerMove, PLAYER_PLAYED} from './actions';

it("should change active player and set player cell when CHANGE_PLAYER is dispatched", ()=>{
    const currentState = {players:[{symbol: "O", id: "p1"}, {symbol: "X", id: "p2"}],activePlayer:{symbol: "O", id: "p1"}};
    const action =handlePlayerMove({row:"1", cell:"1"});

    const newState = rootReducer(currentState, action);
    const expectedState = {players:[{symbol: "O", id: "p1", cells:[{row:"1", cell:"1"}]}, {symbol: "X", id: "p2"}], activePlayer:{symbol: "X", id: "p2"}};

    expect(JSON.stringify(newState)).toEqual(JSON.stringify(expectedState));
});