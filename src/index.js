import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import {createStore} from 'redux';
import rootReducer from './reducers';
import Board from './Board';

const initialState = {players:[{symbol: "O", name:"Player 1", id: "p1"}, {symbol: "X",name:"Player 2", id: "p2"}],activePlayer:{symbol: "O", id: "p1"}};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
<Provider store={store}><Board /></Provider>, 
document.getElementById('root'));
