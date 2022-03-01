import React from 'react';
import { wrapAppComponent } from 'helper/test';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Cell, CellTypes } from '../Cell';

describe('<Cell />', () => {
  it('_render', () => {
    const wrapper = wrapAppComponent(
      mount,
      <Cell row={0} col={0} failedMineKey={'0'} type={CellTypes.CLOSED} />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('_mine', () => {
    const wrapper = wrapAppComponent(
      mount,
      <Cell row={0} col={0} failedMineKey={'0'} type={CellTypes.MINE} />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
