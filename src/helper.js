import {get} from 'lodash';

export function togglePlayer(state){
    const currentPlayerId = get(state,'activePlayer.id','');
    const nextPlayerId = currentPlayerId === "p1" ? "p2" : "p1";
    const players = get(state, 'players',[]);
    return players.find(function(player){return player.id === nextPlayerId});
}