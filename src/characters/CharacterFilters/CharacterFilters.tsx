import React from "react";
import FILTERS_CONFIG from "../../shared/config/characterFiltersConfig";
import FilterCategory from "./FilterCategory";
import FilterCategoryOption from "./FilterCategoryOption";
import { CharacterFilter } from "../../shared/constants/characterConstants";
import { useDispatch, useSelector } from "react-redux";
import {
  addCharacterFilter,
  removeCharacterFilter,
  getCharacters,
} from "../../shared/store/characters/actions";
import { selectSearchTerm, selectCurrentPage } from "../../shared/selectors";

export const CharacterFilters = () => {
  const filtersConfig = FILTERS_CONFIG;
  const dispatch = useDispatch();
  const name = useSelector(selectSearchTerm);
  const page = useSelector(selectCurrentPage);

  const handleFilterSelection = (
    category: string,
    option: string,
    isChecked: boolean
  ) => {
    console.log(category, option, isChecked);
    if (option !== "None") {
      dispatch(addCharacterFilter(category, option));
    } else {
      dispatch(removeCharacterFilter(category));
    }
    dispatch(getCharacters({ name, page }));
  };
  return (
    <div className="filterContainer">
      <h3 className="m-t-0">Filters</h3>
      {filtersConfig.map((filter: CharacterFilter) => (
        <FilterCategory key={filter.key} filter={filter}>
          {filter.options.map((option) => (
            <FilterCategoryOption
              value={option}
              name={filter.key}
              key={option}
              onSelect={(isChecked: boolean) =>
                handleFilterSelection(filter.key, option, isChecked)
              }
            />
          ))}
        </FilterCategory>
      ))}
    </div>
  );
};
