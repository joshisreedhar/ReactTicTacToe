import React from 'react';
import {shallow} from 'enzyme';
import Cell from './Cell';
import renderer from 'react-test-renderer';


it('Cell should render', ()=>{
    const cell = renderer
        .create(<Cell />)
        .toJSON();

    expect(cell).toMatchSnapshot();
});


