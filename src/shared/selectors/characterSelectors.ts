import { createSelector } from "reselect";
import { CharacterState } from "../store/characters/reducer";
import { AppState } from "../store/rootReducer";

export const selectCharacterState = (state: AppState) => state.characters;

export const selectCharacters = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.characters
);
export const selectCharactersIsLoading = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.loading
);
export const selectCharactersError = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.error
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
export const selectAppliedFilters = createSelector(
  selectCharacterState,
  (state: CharacterState) => {
    const filters = state.appliedFilters;
    const appliedFilters: { [key: string]: string } = {};
    filters.forEach((option, category) => {
      appliedFilters[category] = option;
    });
    return appliedFilters;
  }
);
