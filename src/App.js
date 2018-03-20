import React from 'react';
import {connect} from 'react-redux';
import PlayerDetails from './PlayerDetails';
import Board from './Board';
import GameAlert from './Alert'

export const App = function(props){
    return <div id="App" >
                <GameAlert />
                <PlayerDetails players={props.players} />
                <Board />
           </div> ;
}

function mapStateToProps(state){
    return{
        players: state.players
    };
}

export default connect(mapStateToProps)(App);