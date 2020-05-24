import React from "react";

type Props = {
  sortOptions: any[];
  onSelect: Function;
};

export const CharacterSort = (props: Props) => {
  const { sortOptions, onSelect } = props;
  return (
    <div className="sortContainer">
      <span className="m-r-2">Sort By</span>
      <select className="form-input" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select</option>
        {sortOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
