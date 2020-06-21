import React from "react";
import configureStore from "redux-mock-store";
import { APP_INITIAL_STATE } from "../store/rootReducer";
import { Provider } from "react-redux";
import {
  mount,
  ReactWrapper,
  ShallowWrapper,
  shallow,
  ShallowRendererProps,
} from "enzyme";

export const getMockedStore = () => {
  const mockStore = configureStore();
  const store = mockStore(APP_INITIAL_STATE);
  return store;
};

export const mountWrapper = (component: JSX.Element): ReactWrapper => {
  const store = getMockedStore();
  return mount(<Provider store={store}>{component}</Provider>);
};

export const shallowWrapper = (
  component: JSX.Element,
  options?: ShallowRendererProps
): ShallowWrapper => {
  const store = getMockedStore();
  return shallow(<Provider store={store}>{component}</Provider>, options);
};
