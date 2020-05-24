import { createSelector } from "reselect";
import { CharacterState } from "../store/characters/reducer";
import { AppState } from "../store/rootReducer";

export const selectCharacterState = (state: AppState) => state.characters;

export const selectCharacters = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.characters
);
export const selectTotalPages = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.totalPages
);
export const selectSortOptions = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.sortOptions
);
export const selectSearchTerm = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.searchTerm
);
export const selectCurrentPage = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.selectedPage
);
