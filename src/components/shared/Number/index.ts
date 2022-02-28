import d0 from 'assets/nums/d0.svg';
import d1 from 'assets/nums/d1.svg';
import d2 from 'assets/nums/d2.svg';
import d3 from 'assets/nums/d3.svg';
import d4 from 'assets/nums/d4.svg';
import d5 from 'assets/nums/d5.svg';
import d6 from 'assets/nums/d6.svg';
import d7 from 'assets/nums/d7.svg';
import d8 from 'assets/nums/d8.svg';
import d9 from 'assets/nums/d9.svg';
import d_minus from 'assets/nums/d-.svg';

const NumberAsserts = [d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d_minus];

interface NumberProps {
  num: number;
}

export * from './Number';
export { NumberAsserts };
export type { NumberProps };
