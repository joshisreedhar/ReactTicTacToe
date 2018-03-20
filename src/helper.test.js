import {togglePlayer, checkIfWinningMove} from './helper';

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

it("checkWinningMove should check if row is filled",()=>{
    const cells = [{row:"1", col:"1"}, {row:"1", col:"2"}];
    const clickedCell = {row: "1", col: "3"};
    const result = checkIfWinningMove(cells, clickedCell);  
    expect(result).toBe(true);  
});

it("checkWinningMove should check if col is filled",()=>{
    const cells = [{row:"1", col:"1"}, {row:"2", col:"1"}];
    const clickedCell = {row: "3", col: "1"};
    const result = checkIfWinningMove(cells, clickedCell);  
    expect(result).toBe(true);  
});

it("checkWinningMove should check if diagnol 1 is filled",()=>{
    const cells = [{row:"1", col:"1"}, {row:"2", col:"2"}];
    const clickedCell = {row: "3", col: "3"};
    const result = checkIfWinningMove(cells, clickedCell);  
    expect(result).toBe(true);  
});

it("checkWinningMove should check if diagnol 2 is filled",()=>{
    const cells = [{row:"3", col:"1"}, {row:"2", col:"2"}];
    const clickedCell = {row: "1", col: "3"};
    const result = checkIfWinningMove(cells, clickedCell);  
    expect(result).toBe(true);  
});