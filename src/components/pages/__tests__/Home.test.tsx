import React from 'react';
import { waitForComponentToPaint, wrapAppComponent } from 'helper/test';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { toWin } from 'setupTests';
import { CONFIGS } from 'config/game';
import { CellTypes } from 'components/shared/Cell';
import { generateMines } from 'helper/field';
import { Faces } from 'components/shared/Face';
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

  it('_test field', async () => {
    const wrapper = wrapAppComponent(mount, <Home />);

    let cell00 = wrapper.find({ 'data-testid': 'cell-0-0' }).find({ 'data-testid': 'cell' }).last();
    cell00.simulate('click');

    await waitForComponentToPaint(wrapper);

    cell00 = wrapper.find({ 'data-testid': 'cell-0-0' }).find({ 'data-testid': 'cell' }).last();
    expect(cell00.prop('type')).toEqual(CellTypes.TYPE_1);
  });

  it('_lose', async () => {
    const wrapper = wrapAppComponent(mount, <Home />);

    const mines = generateMines({ rows: 9, cols: 9, minesCount: 10 });

    const cell = wrapper
      .find({ 'data-testid': `cell-${mines[0]}` })
      .find({ 'data-testid': 'cell' })
      .last();
    cell.simulate('click');

    await waitForComponentToPaint(wrapper);

    const face = wrapper.find({ 'data-testid': 'face' }).last();
    expect(face.prop('type')).toEqual(Faces.LOSE);
  });

  it('_win', async () => {
    const wrapper = wrapAppComponent(mount, <Home />);

    toWin.forEach((key) => {
      const cell = wrapper
        .find({ 'data-testid': `cell-${key}` })
        .find({ 'data-testid': 'cell' })
        .last();
      cell.simulate('click');
    });

    await waitForComponentToPaint(wrapper);

    const face = wrapper.find({ 'data-testid': 'face' }).last();
    expect(face.prop('type')).toEqual(Faces.WIN);
  });
});
