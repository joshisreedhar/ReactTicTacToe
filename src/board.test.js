import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Board} from './board';

it("Should render board",()=>{
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = shallow(<Board />);
    expect(wrapper.find("#board").exists()).toBe(true);
});