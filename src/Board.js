import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Row from './Row';
import PlayerDetails from './PlayerDetails';

const Div = styled.div`
    height:600px;
    width:50%;
    margin:0 auto;
    border: 1px solid black;
`;

export const Board = function(props){
    return <Div id="board" >
                <Row rowIndex="1" />
                <Row rowIndex="2" />
                <Row rowIndex="3" />
                <PlayerDetails players={props.players} />
           </Div> ;
}

function mapStateToProps(state){
    return{
        players:state.players
    }
}

export default connect(mapStateToProps)(Board);