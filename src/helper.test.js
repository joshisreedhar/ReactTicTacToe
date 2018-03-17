import {togglePlayer} from './helper';

it("togglePlayer should toggle the active player",()=>{
    const currentState = {players:[{symbol: "O", id: "p1"}, {symbol: "X", id: "p2"}],activePlayer:{symbol: "O", id: "p1"}};
    const expectedResult = {symbol: "X", id: "p2"};
    const result = togglePlayer(currentState);  
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResult));  
});

it("togglePlayer should return player 1 as active player when there is no active player",()=>{
    const currentState = {players:[{symbol: "O", id: "p1"}, {symbol: "X", id: "p2"}]};
    const expectedResult = {symbol: "O", id: "p1"};
    const result = togglePlayer(currentState);  
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResult));  
});