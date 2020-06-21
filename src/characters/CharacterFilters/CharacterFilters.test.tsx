import React from "react";
import { ReactWrapper } from "enzyme";
import { mountWrapper } from "../../shared/utils/testUtils";
import { CharacterFilters } from "./../CharacterFilters/CharacterFilters";
import FilterCategory from "./FilterCategory";
import FILTERS_CONFIG from "../../shared/config/characterFiltersConfig";
import FilterCategoryOption from "./FilterCategoryOption";

describe("Character Filters", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mountWrapper(<CharacterFilters />);
  });

  it("should render the character filter categories", () => {
    expect(wrapper.find(FilterCategory)).toHaveLength(FILTERS_CONFIG.length);
  });

  it("should render the character filter category options", () => {
    wrapper.find(FilterCategory).forEach((node, index: number) => {
      expect(node.find(FilterCategoryOption)).toHaveLength(
        FILTERS_CONFIG[index].options.length
      );
    });
  });
});
