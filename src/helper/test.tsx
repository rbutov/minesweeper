import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { confStore } from 'store';

type Wrapper<P = unknown, S = unknown> = ShallowWrapper<P, S> | ReactWrapper<P, S>;
type MountFnType<P, S> = (
  node: React.ReactElement<P>,
  options?: Record<string, unknown>
) => Wrapper<P, S>;

const wrapAppComponent = <P, S>(
  renderer: MountFnType<P, S>,
  element: JSX.Element,
  other?: {
    store?: Store;
  }
): Wrapper<P, S> => {
  const coreStore = confStore();

  return renderer(<Provider store={other?.store ? other.store : coreStore}>{element}</Provider>);
};

const waitForComponentToPaint = async <P, S>(
  wrapper: Wrapper<P, S>,
  other?: { delay?: number; props?: Pick<P, keyof P> }
) => {
  await act(async () => {
    await runAllPromises();
    await new Promise((resolve) => setTimeout(resolve, other?.delay ? other.delay : 0));
    wrapper.setProps({ ...other?.props });
    wrapper.update();
  });
};

const runAllPromises = async () => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 0);
  });
};

export { wrapAppComponent, waitForComponentToPaint };
export type { Wrapper };
