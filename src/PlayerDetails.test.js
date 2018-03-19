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
    const ids =wrapper.find('#id');
    const names =wrapper.find('#player-name');
    const symbols =wrapper.find('#symbol');

    expect(ids.first().text()).toEqual("p1");
    expect(ids.at(1).text()).toEqual("p2");

    expect(names.first().text()).toEqual("Sreedhar");
    expect(names.at(1).text()).toEqual("Jagannath");

    expect(symbols.first().text()).toEqual("O");
    expect(symbols.at(1).text()).toEqual("X");
});