import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme';
import {Cell} from './Cell';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

it('Cell should render', ()=>{
    const cell = renderer
        .create(<Cell cellText={"test"} col="1" row ="1"/>)
        .toJSON();

    expect(cell).toMatchSnapshot();
});

it('Empty Cell should disptch call when clicked', ()=>{
    Enzyme.configure({ adapter: new Adapter() })
    const mockHandler = jest.fn();
    let wrapper = shallow(<Cell row="1" col="1" cellText="" onSelect={mockHandler} />);
    wrapper.find('#cell11').simulate('click');
    expect(mockHandler.mock.calls.length).toBe(1);
});

it('Filled Cell should not disptch call when clicked', ()=>{
    Enzyme.configure({ adapter: new Adapter() })
    const mockHandler = jest.fn();
    let wrapper = shallow(<Cell row="1" col="1" cellText="X" onSelect={mockHandler} />);
    wrapper.find('#cell11').simulate('click');
    expect(mockHandler.mock.calls.length).toBe(0);
});

it('Cell should not disptch call when clicked when game is complete', ()=>{
    Enzyme.configure({ adapter: new Adapter() })
    const mockHandler = jest.fn();
    let wrapper = shallow(<Cell row="1" col="1" cellText="" onSelect={mockHandler} gameState="Complete" />);
    wrapper.find('#cell11').simulate('click');
    expect(mockHandler.mock.calls.length).toBe(0);
});

it('Cell should not disptch call when clicked when game is drawn', ()=>{
    Enzyme.configure({ adapter: new Adapter() })
    const mockHandler = jest.fn();
    let wrapper = shallow(<Cell row="1" col="1" cellText="" onSelect={mockHandler} gameState="Draw" />);
    wrapper.find('#cell11').simulate('click');
    expect(mockHandler.mock.calls.length).toBe(0);
});

it('Cell, Should use current player symbol to fill the cell', ()=>{
    Enzyme.configure({ adapter: new Adapter() })
    const mockHandler = jest.fn();
    let wrapper = shallow(<Cell row="1" col="1" cellText="" onSelect={mockHandler} activeSymbol="O"/>);
    wrapper.find('#cell11').simulate('click');
    expect(wrapper.state().cellText).toBe("O");
});