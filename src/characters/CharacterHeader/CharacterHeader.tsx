import React from "react";
import { CharacterSearch } from "../CharacterSearch/CharacterSearch";
import { CharacterSort } from "../CharacterSort/CharacterSort";
import { useDispatch } from "react-redux";
import {
  setCharactersSearchTerm,
  sortCharacters,
} from "../../shared/store/characters/actions";
import { SortParam, SortDirection } from "../../shared/constants";
import { SelectedFilters } from "../CharacterFilters/SelectedFilters";

export const CharacterHeader = () => {
  const dispatch = useDispatch();
  const sortOptions = [SortParam.Name, SortParam.Gender, SortParam.Species];

  const handleSearchInput = (text: string) => {
    dispatch(setCharactersSearchTerm(text));
  };

  const handleSetSortOptions = (param: SortParam, direction: SortDirection) => {
    dispatch(sortCharacters(direction, param));
  };

  return (
    <header className="characterHeader">
      <div className="characterHeader__search">
        <CharacterSearch onSearch={handleSearchInput} />
      </div>
      <div className="characterHeader__sort">
        <CharacterSort
          sortOptions={sortOptions}
          onSelect={handleSetSortOptions}
        />
      </div>
      <div className="characterHeader__filters">
        <SelectedFilters />
      </div>
    </header>
  );
};
