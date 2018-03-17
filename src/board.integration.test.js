import React from 'react';
import {Provider} from 'react-redux';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import Board from './Board';

it('Board should render 3 Rows and 9 Cells', ()=>{
    Enzyme.configure({ adapter: new Adapter() })
    const mockStore = configureStore();
    const initialState = {
        activePlayer:{
            symbol:"O"
        }
    };
    let store = mockStore(initialState);
    let wrapper= mount(<Provider store={store}><Board /></Provider>);
    expect(wrapper.find('Row').length).toBe(3);
    expect(wrapper.find('Cell').length).toBe(9);
});

it('Board should render correct indexes', ()=>{
    Enzyme.configure({ adapter: new Adapter() })
    const mockStore = configureStore();
    const initialState = {
                            activePlayer:{
                                symbol:"O"
                            }
                        };
    let store = mockStore(initialState);
    let wrapper= mount(<Provider store={store}><Board /></Provider>);
    for(let rowIndex=1; rowIndex<4; rowIndex++){
        expect(wrapper.find(`#row${rowIndex}`).exists()).toBe(true);
        for(let colIndex=1; colIndex <4 ; colIndex++){
            expect(wrapper.find(`#cell${rowIndex}${colIndex}`).exists()).toBe(true);
        }
    }
});