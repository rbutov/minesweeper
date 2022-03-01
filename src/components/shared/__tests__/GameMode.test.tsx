import React from 'react';
import { wrapAppComponent } from 'helper/test';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Timer } from '../Timer';

describe('<Timer />', () => {
  it('_render', () => {
    const wrapper = wrapAppComponent(mount, <Timer />);

    const numbers0 = wrapper.find({ 'data-testid': 'number-0' });
    expect(numbers0.getElements()).toHaveLength(6);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
