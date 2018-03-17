import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import Cell from './Cell';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux'
import {handlePlayerMove} from './actions';

it('Cell should be connected to store', ()=>{
    Enzyme.configure({ adapter: new Adapter() })
    const clickHandler = jest.fn();
    const initialState = {
        activePlayer:{symbol: "O"}
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
});