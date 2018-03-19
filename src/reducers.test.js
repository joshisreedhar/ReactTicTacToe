import rootReducer from './reducers';
import {handlePlayerMove, PLAYER_PLAYED} from './actions';

it("should change active player when CHANGE_PLAYER is dispatched", ()=>{
    const currentState = {players:[{symbol: "O", id: "p1"}, {symbol: "X", id: "p2"}],activePlayer:{symbol: "O", id: "p1"}};
    const action =handlePlayerMove({});

    const newState = rootReducer(currentState, action);
    const expectedState = {players:[{symbol: "O", id: "p1"}, {symbol: "X", id: "p2"}],activePlayer:{symbol: "X", id: "p2"}};

    expect(JSON.stringify(newState)).toEqual(JSON.stringify(expectedState));
});