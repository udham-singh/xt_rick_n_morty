import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { getMockedStore } from "./shared/utils/testUtils";
import App from "./App";
import CharactersPage from "./characters";

describe("renders <App/> without errors", () => {
  it("should redirect to /chatacters route", () => {
    const store = getMockedStore();
    const wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(CharactersPage)).toHaveLength(1);
  });
});
