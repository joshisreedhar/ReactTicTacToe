import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {handlePlayerMove, handlePlayerWon} from './actions';
import {checkIfWinningMove} from './helper';
import {get} from 'lodash';

const Div= styled.div`
        border: 1px solid black;
        height:100px;
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
        if(this.isCellClickable()){
            this.setState({cellText:this.props.activeSymbol});
            const selectedCell = {row: this.props.row, col: this.props.col};
            const playerWon = checkIfWinningMove(this.props.cells,selectedCell)
            if(playerWon){
                this.props.onWon(this.props.activePlayerId)
            }
            else{
            this.props.onSelect(selectedCell);
            }
        }
    }

    isCellClickable(){
        return this.state.cellText === "" && this.props.gameState !== "Complete" && this.props.gameState !== "Draw";
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
        activePlayerId: state.activePlayer.id,
        cells: get(state,'activePlayer.cells',[]),
        gameState: get(state, 'gameState','')
    }
}

function mapDispatchToProps(dispatch){
    return{
        onSelect: (cellIndex) => dispatch(handlePlayerMove(cellIndex)),
        onWon: (playerId) => dispatch(handlePlayerWon(playerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

