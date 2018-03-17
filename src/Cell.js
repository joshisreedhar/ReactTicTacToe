import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {handlePlayerMove} from './actions';

const Div= styled.div`
        border: 1px solid black;
        height:200px;
        display:inline-block;
        width:33%;
        text-align: center;
`;


export class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cellText: props.cellText ? props.cellText : ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.cellText === ""){
            this.setState({cellText:this.props.activeSymbol});
            this.props.onSelect({row: this.props.row, col: this.props.col});
        }
    }

    render(){
        return <Div 
                id={`cell${this.props.row}${this.props.col}`} 
                onClick={this.handleClick}>{this.state.cellText}</Div>
    }
}

function mapStateToProps(state){
    return{
        activeSymbol: state.activePlayer.symbol,
    }
}

function mapDispatchToProps(dispatch){
    return{
        onSelect: (cellIndex) => dispatch(handlePlayerMove(cellIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

