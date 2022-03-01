import React from 'react';
import { wrapAppComponent } from 'helper/test';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CONFIGS } from 'config/game';
import { Home } from '../Home';

describe('<Home />', () => {
  it('_render', () => {
    const wrapper = wrapAppComponent(mount, <Home />);

    const cells = wrapper.find({ 'data-testid': 'cell' });
    expect(cells).toHaveLength(CONFIGS.easy.size.rows * CONFIGS.easy.size.cols * 2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('_modes', () => {
    const wrapper = wrapAppComponent(mount, <Home />);

    for (let config in CONFIGS) {
      const button = wrapper.find({ 'data-testid': `mode-${config}` });

      expect(wrapper.contains(button.getElement())).toBeTruthy();
      button.last().simulate('click');

      const cells = wrapper.find({ 'data-testid': 'cell' });
      expect(cells).toHaveLength(
        CONFIGS[config as keyof typeof CONFIGS].size.rows *
          CONFIGS[config as keyof typeof CONFIGS].size.cols *
          2
      );
    }
  });

  it('_check all elements', () => {
    const wrapper = wrapAppComponent(mount, <Home />);

    const field = wrapper.find({ 'data-testid': 'field' }).first();
    expect(wrapper.contains(field.getElement())).toBeTruthy();

    const header = wrapper.find({ 'data-testid': 'header' }).first();
    expect(wrapper.contains(header.getElement())).toBeTruthy();
  });
});
