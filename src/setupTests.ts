import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

export const toWin = [
  '0-0',
  '8-8',
  '0-8',
  '8-0',
  '0-1',
  '0-2',
  '0-3',
  '0-4',
  '0-5',
  '2-3',
  '2-4',
  '2-5',
  '2-6',
  '2-7',
  '3-4',
  '3-5',
  '3-8',
  '4-8',
  '1-0',
];
jest.mock('helpers/field', () => ({
  ...jest.requireActual('helpers/field'),
  generateMines: () => ['1-1', '3-3', '7-8', '5-6', '2-8', '8-2', '1-2', '1-3', '1-4', '1-5'],
}));
