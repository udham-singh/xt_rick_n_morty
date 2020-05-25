import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAppliedFilters,
  selectSearchTerm,
  selectCurrentPage,
} from "../../../shared/selectors";
import {
  removeCharacterFilter,
  getCharacters,
} from "../../../shared/store/characters/actions";
import { Badge } from "../../../shared/components/atoms";

export const SelectedFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectAppliedFilters);
  const name = useSelector(selectSearchTerm);
  const page = useSelector(selectCurrentPage);
  const filterEntries = Object.entries(filters);

  const handleRemoveFilter = (category: string) => {
    dispatch(removeCharacterFilter(category));
    dispatch(getCharacters({ name, page }));
  };

  return filterEntries.length ? (
    <>
      <h3>Selected Filters</h3>
      <div className="badgeContainer">
        {filterEntries.map(([category, option]) => (
          <Badge
            key={`${category}_${option}`}
            text={option}
            onClose={() => handleRemoveFilter(category)}
          />
        ))}
      </div>
    </>
  ) : null;
};
