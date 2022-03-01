import React from 'react';
import { wrapAppComponent } from 'helper/test';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Cell, CellTypes } from '../Cell';

describe('<Cell />', () => {
  const content = 'Test';

  it('render <Cell /> component', () => {
    const wrapper = wrapAppComponent(
      mount,
      <Cell row={0} col={0} failedMineKey={'0'} type={CellTypes.CLOSED} />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
