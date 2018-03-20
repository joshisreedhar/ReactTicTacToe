import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';
import ConfigureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import GameAlert from './Alert';


it("should use state to update message",()=>{

    Enzyme.configure({adapter:new Adapter()});

    const state = {activePlayer:{name: 'Player 1'}}
    const mockstore = ConfigureStore();
    const store = mockstore(state);

    const alertWrapper = mount(<Provider store={store}><GameAlert /></Provider>);

    expect(alertWrapper.find("#alert").first().text()).toEqual("Next Player - Player 1");
    alertWrapper.unmount();
});

it("should indicate winner when game is finished",()=>{

    Enzyme.configure({adapter:new Adapter()});

    const state = {gameState: 'Complete',activePlayer:{name: 'Player 1'}}
    const mockstore = ConfigureStore();
    const store = mockstore(state);

    const alertWrapper = mount(<Provider store={store}><GameAlert /></Provider>);

    expect(alertWrapper.find("#alert").first().text()).toEqual("Winner - Player 1");
    alertWrapper.unmount();
});

it("should indicate when game is drawn",()=>{

    Enzyme.configure({adapter:new Adapter()});

    const state = {gameState: 'Draw',activePlayer:{name: 'Player 1'}}
    const mockstore = ConfigureStore();
    const store = mockstore(state);

    const alertWrapper = mount(<Provider store={store}><GameAlert /></Provider>);

    expect(alertWrapper.find("#alert").first().text()).toEqual("Draw");
});