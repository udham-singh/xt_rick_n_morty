import React, { FunctionComponent } from "react";
import { CharacterFilter } from "../../../shared/constants/characterConstants";

type Props = {
  filter: CharacterFilter;
};

const FilterCategory: FunctionComponent<Props> = ({ filter, children }) => {
  return (
    <div className="filterCategory">
      <h4 className="m-b-2">{filter.category}</h4>
      <div className="filterCategory__options">{children}</div>
    </div>
  );
};

export default FilterCategory;
