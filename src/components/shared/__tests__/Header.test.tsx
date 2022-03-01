import React from 'react';
import { wrapAppComponent } from 'helper/test';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Header } from '../Header';

describe('<Header />', () => {
  it('_render', () => {
    const wrapper = wrapAppComponent(mount, <Header />);

    const timer = wrapper.find({ 'data-testid': 'timer' }).first().getElement();
    expect(wrapper.contains(timer)).toBeTruthy();
    const counter = wrapper.find({ 'data-testid': 'counter' }).first().getElement();
    expect(wrapper.contains(counter)).toBeTruthy();
    const face = wrapper.find({ 'data-testid': 'face' }).first().getElement();
    expect(wrapper.contains(face)).toBeTruthy();

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
