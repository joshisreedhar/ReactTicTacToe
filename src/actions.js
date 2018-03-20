export const PLAYER_PLAYED= 'PLAYER_PLAYED';
export const PLAYER_WON= 'PLAYER_WON';

export function handlePlayerMove(cellIndex){
    return { type: PLAYER_PLAYED, cellIndex };
}

export function handlePlayerWon(playerId){
    return { type: PLAYER_WON, playerId };
}