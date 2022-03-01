import React from 'react';
import { wrapAppComponent } from 'helpers/test';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Face, Faces } from '../Face';

describe('<Face />', () => {
  it('_render', () => {
    const wrapper = wrapAppComponent(mount, <Face type={Faces.WIN} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
