import React from 'react';
import Enzyme from 'enzyme';
import {mount,shallow} from 'enzyme';
import PlayerDetails from './PlayerDetails';
import Adapter from 'enzyme-adapter-react-16';

it("should render",()=>{
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = shallow(<PlayerDetails  />);
    expect(wrapper.find('#player-details').exists()).toBe(true);
});

it("should render player details",()=>{
    Enzyme.configure({ adapter: new Adapter() });
    const players = [{symbol: "O",name:"Sreedhar", id: "p1"}, {symbol: "X",name:"Jagannath", id: "p2"}];
    const wrapper = mount(<PlayerDetails players={players} />);
    const ids =wrapper.find('#player-details');

    expect(ids.first().text()).toEqual("Sreedhar: OJagannath: X");
});