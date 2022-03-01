import React from 'react';
import { wrapAppComponent } from 'helpers/test';
import { mount } from 'enzyme';
import { CONFIGS } from 'config/game';
import toJson from 'enzyme-to-json';
import { Field } from '../Field';

describe('<Field />', () => {
  it('_render', () => {
    const wrapper = wrapAppComponent(mount, <Field />);

    const cells = wrapper.find({ 'data-testid': 'cell' });
    expect(cells).toHaveLength(CONFIGS.easy.size.rows * CONFIGS.easy.size.cols * 2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
