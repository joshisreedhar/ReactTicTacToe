export const PLAYER_PLAYED= 'PLAYER_PLAYED';

export function handlePlayerMove(cellIndex){
    return { type: PLAYER_PLAYED, cellIndex };
}