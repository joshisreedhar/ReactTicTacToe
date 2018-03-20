import React from 'react';
import Enzyme from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GameAlert} from './alert'; 

it("Should render active player details",()=>{
    Enzyme.configure({adapter : new Adapter()});
    const alertWrapper = mount(<GameAlert message="test" /> )
    expect(alertWrapper.find("#alert").first().text()).toEqual("test");
});