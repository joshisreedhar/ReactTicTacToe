import React from 'react';
import {get} from 'lodash';
import styled from 'styled-components';

const DIV = styled.div`
    margin-top:10px
`;


const PlayerDetails = function(props){
    let players = get(props, 'players',[]);
    return <DIV id="player-details">
                {players.map(function(player){
                return <div id={player.id}>{player.name}: {player.symbol}</div>
                })}
        </DIV>
}

export default PlayerDetails;