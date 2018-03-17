import React from 'react';
import Cell from './Cell';

const Row = function(props){
    return<div id={`row${props.rowIndex}`}>
            <Cell row= {props.rowIndex} col="1" />
            <Cell row= {props.rowIndex} col="2" />
            <Cell row= {props.rowIndex} col="3" />
        </div>  
}
export default Row;
