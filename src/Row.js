import React from 'react';
import Cell from './Cell';
import styled from 'styled-components';

const Div = styled.div`
    height:200px
`;

const Row = function(props){
    return<Div id={`row${props.rowIndex}`}>
            <Cell row= {props.rowIndex} col="1" />
            <Cell row= {props.rowIndex} col="2" />
            <Cell row= {props.rowIndex} col="3" />
        </Div>  
}
export default Row;
