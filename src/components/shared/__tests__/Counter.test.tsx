import React from 'react';
import { wrapAppComponent } from 'helpers/test';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Counter } from '../Counter';

describe('<Counter />', () => {
  it('_render', () => {
    const wrapper = wrapAppComponent(mount, <Counter />);

    const numbers0 = wrapper.find({ 'data-testid': 'number-0' });
    expect(numbers0).toHaveLength(4);
    const numbers1 = wrapper.find({ 'data-testid': 'number-1' });
    expect(numbers1).toHaveLength(2);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
