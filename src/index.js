import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import {createStore} from 'redux';
import rootReducer from './reducers';
import Board from './Board';

const store = createStore(rootReducer,{activePlayer:{symbol:"O"}});

ReactDOM.render(
<Provider store={store}><Board /></Provider>, 
document.getElementById('root'));
