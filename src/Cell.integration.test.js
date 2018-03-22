import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Cell from './Cell';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux'
import {handlePlayerMove, handlePlayerWon} from './actions';

it('Cell should be connected to store', ()=>{
    Enzyme.configure({ adapter: new Adapter() })
    const clickHandler = jest.fn();
    const initialState = {
        activePlayer:{symbol: "O", id:"p1"}, gameState:"", cells:[]
    }

    const mockStore = configureStore();
    let wrapper;
    let store;

    store = mockStore(initialState);
    wrapper= mount(<Provider store={store}><Cell row="1" col="2" cellText="" /></Provider>)
    let actions = store.getActions();
    wrapper.find('#cell12').first().simulate('click');
    expect(actions).toEqual([ handlePlayerMove({row:"1", col:"2"}) ]);
    expect(wrapper.find({activeSymbol: "O" }).exists()).toBe(true);
    expect(wrapper.find({gameState: "" }).exists()).toBe(true);
    expect(wrapper.find({activePlayerId: "p1" }).exists()).toBe(true);
    expect(wrapper.find({cells: [] }).exists()).toBe(true);
});

it('Cell, Should check if current player is a winner when cell is selected', ()=>{
    Enzyme.configure({ adapter: new Adapter() })
    const wonHandler = jest.fn();
    const initialState = {
        activePlayer:{symbol: "O", id: "p1", cells:[{row:"1", col:"1"},{row:"1", col:"2"}]}
    }

    const mockStore = configureStore();
    let wrapper;
    let store;

    store = mockStore(initialState);
    wrapper= mount(<Provider store={store}><Cell row="1" col="3" cellText="" /></Provider>)
    let actions = store.getActions();
    wrapper.find('#cell13').first().simulate('click');
    expect(actions).toEqual([ handlePlayerWon("p1") ]);
});