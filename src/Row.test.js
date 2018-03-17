import {mount, shallow} from 'enzyme';
import React from 'react';
import Row from './Row';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it("Should render",()=>{
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = shallow(<Row rowIndex="1"></Row>);
    expect(wrapper.find("#row1").exists()).toBe(true);
});