import React from "react";
import { useSelector } from "react-redux";
import { selectAppliedFilters } from "../../../shared/selectors";

type Props = {
  value: string;
  name: string;
  onSelect: Function;
};

const FilterCategoryOption = ({ value, name, onSelect }: Props) => {
  const selectedFilters = useSelector(selectAppliedFilters);
  return (
    <div className="filterCategoryOption">
      <input
        type="radio"
        className="m-l-0"
        id={`${name}_${value}`}
        name={name}
        checked={selectedFilters[name] === value}
        onChange={(e) => onSelect(e.target.checked)}
      />
      <label htmlFor={`${name}_${value}`}>{value}</label>
    </div>
  );
};

export default FilterCategoryOption;
