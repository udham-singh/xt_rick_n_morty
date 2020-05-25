import { Character } from "../../models/character";
import * as actions from "./actionTypes";
import { SortDirection, SortParam } from "../../constants";

export interface CharacterState {
  loading: boolean;
  error: string;
  searchTerm: string;
  characters: Character[];
  appliedFilters: Map<string, string>;
  selectedPage: number;
  totalPages: number;
  sortOptions: {
    direction: SortDirection;
    param: SortParam;
  };
}

export const INITIAL_STATE: CharacterState = {
  loading: false,
  error: "",
  searchTerm: "",
  characters: [],
  appliedFilters: new Map(),
  selectedPage: 1,
  totalPages: 1,
  sortOptions: {
    direction: SortDirection.Asc,
    param: SortParam.None,
  },
};

export default function (
  state = INITIAL_STATE,
  action: actions.CharacterAction
): CharacterState {
  switch (action.type) {
    case actions.GET_CHARACTERS:
      return { ...state, loading: true };
    case actions.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters,
        totalPages: action.totalPages,
        loading: false,
        error: "",
      };
    case actions.GET_CHARACTERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actions.SET_CHARACTERS_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };
    case actions.SET_CHARACTERS_PAGE:
      return { ...state, selectedPage: action.page };
    case actions.SORT_CHARACTERS:
      const { direction, param } = action;
      return { ...state, sortOptions: { direction, param } };
    case actions.SORT_CHARACTERS_SUCCESS:
      return { ...state, characters: action.sortedCharacters };
    case actions.ADD_CHARACTER_FILTER: {
      const filters = state.appliedFilters;
      const { category, option } = action;
      filters.set(category, option);
      return { ...state, appliedFilters: new Map(filters) };
    }
    case actions.REMOVE_CHARACTER_FILTER: {
      const filters = state.appliedFilters;
      const { category } = action;
      filters.delete(category);
      return { ...state, appliedFilters: new Map(filters) };
    }
    default:
      return state;
  }
}
