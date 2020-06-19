import configureStore from "redux-mock-store";
import { APP_INITIAL_STATE } from "../store/rootReducer";

export const getMockedStore = () => {
  const mockStore = configureStore();
  const store = mockStore(APP_INITIAL_STATE);
  return store;
};
