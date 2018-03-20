import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {get} from 'lodash';

const Div = styled.div`
    height:50px;
    width:50%;
    margin:0 auto;
    text-aligh:center;
    font-weight:bold;
`;

export const GameAlert = function(props){
    return <Div id="alert" >{props.message}</Div> ;
}

function getMessage(state){
    const gameState = get(state,'gameState','');
    const playerName = get(state,'activePlayer.name','');
    switch(gameState){
    case "Complete":
        return `Winner - ${playerName}`
    case "Draw":
        return `Draw`
    default:
       return `Next Player - ${playerName}`
    }
}

function mapStateToProps(state){
    return{
        message: getMessage(state)
    }
}

export default connect(mapStateToProps)(GameAlert);