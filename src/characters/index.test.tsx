import React from "react";
import { mount, ReactWrapper } from "enzyme";
import CharacterPage from ".";
import { getMockedStore } from "../shared/utils/testUtils";
import { Provider } from "react-redux";
import { CharacterFilters } from "./CharacterFilters/CharacterFilters";
import { CharacterHeader } from "./CharacterHeader/CharacterHeader";
import { CharactersList } from "./CharactersList/CharactersList";
import { Pagination } from "../shared/components/molecules";

describe("Character page", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    const store = getMockedStore();
    wrapper = mount(
      <Provider store={store}>
        <CharacterPage />
      </Provider>
    );
  });

  it("should render the page components", () => {
    expect(wrapper.find(CharacterFilters)).toHaveLength(1);
    expect(wrapper.find(CharacterHeader)).toHaveLength(1);
    expect(wrapper.find(CharactersList)).toHaveLength(1);
    expect(wrapper.find(Pagination)).toHaveLength(1);
  });
});
