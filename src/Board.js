import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Row from './Row';

const Div = styled.div`
display:block;
`;

export const Board = function(props){
    return <Div id="board" >
                <Row rowIndex="1" />
                <Row rowIndex="2" />
                <Row rowIndex="3" />
           </Div> ;
}

export default connect()(Board);