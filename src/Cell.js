import React from 'react';
import styled from 'styled-components';

const Div= styled.div`
border: 1px;
border-color:black;
`;


class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cellText: props.cellText ? props.cellText : ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.cellText === ""){
            this.setState({cellText:"x"});
            this.props.onSelect();
        }
    }

    render(){
        return <Div 
                id={`cell${this.props.row}${this.props.col}`} 
                onClick={this.handleClick}>{this.state.cellText}</Div>
    }
}

export default Cell;

