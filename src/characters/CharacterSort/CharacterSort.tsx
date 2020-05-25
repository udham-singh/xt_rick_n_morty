import React, { useState, useEffect } from "react";
import { SortParam, SortDirection } from "../../shared/constants";

type Props = {
  sortOptions: any[];
  onSelect: Function;
};

export const CharacterSort = ({ sortOptions, onSelect }: Props) => {
  const [sortParam, setSortParam] = useState<SortParam>();
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.Asc
  );

  useEffect(() => {
    onSelect(sortParam, sortDirection);
  }, [sortDirection, sortParam]);

  return (
    <div className="sortContainer">
      <span className="m-r-2">Sort By</span>
      <select
        className="form-input"
        onChange={(e) => setSortParam(e.target.value as SortParam)}
      >
        <option value="">id</option>
        {sortOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <select
        className="form-input m-l-2"
        onChange={(e) => setSortDirection(e.target.value as SortDirection)}
      >
        <option value={SortDirection.Asc}>Ascending</option>
        <option value={SortDirection.Desc}>Descending</option>
      </select>
    </div>
  );
};
