import {get} from 'lodash';

export function togglePlayer(state){
    const currentPlayerId = get(state,'activePlayer.id','');
    const nextPlayerId = currentPlayerId === "p1" ? "p2" : "p1";
    const players = get(state, 'players',[]);
    return players.find(function(player){return player.id === nextPlayerId});
}

export function checkIfWinningMove(cells, clickedCell){
    if(!cells || cells.length === 0)
        return false;
    return isRowFilled(cells, clickedCell) || isColFilled(cells, clickedCell) || isDiagnolFilled(cells, clickedCell);
}

function isRowFilled(cells, clickedCell){
    const cellsinSameRow = cells.filter(cell => cell.row === clickedCell.row);
    return cellsinSameRow.length === 2;
}

function isColFilled(cells, clickedCell){
    const cellsinSameCol = cells.filter(cell => cell.col === clickedCell.col);
    return cellsinSameCol.length === 2;
}

function isDiagnolFilled(cells, clickedCell){
    if(clickedCell.row === clickedCell.col){
        const diagnolCells = cells.filter(cell => cell.col === cell.row);
        return diagnolCells.length === 2;
    }
    else if(parseInt(clickedCell.row) + parseInt(clickedCell.col)=== 4){
        const diagnolCells = cells.filter(cell => parseInt(cell.col) + parseInt(cell.row) === 4);
        return diagnolCells.length === 2;
    }
    
}