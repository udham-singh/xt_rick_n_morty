import { Character, ICharacterFilter } from "../../models/character";
import * as actions from "./actionTypes";
import { SortDirection, SortParam } from "../../constants";

export interface CharacterState {
  loading: boolean;
  searchTerm: string;
  characters: Character[];
  selectedFilters: Map<number, ICharacterFilter>;
  selectedPage: number;
  totalPages: number;
  sortOptions: {
    direction: SortDirection;
    param: SortParam;
  };
}

export const INITIAL_STATE: CharacterState = {
  loading: false,
  searchTerm: "",
  characters: [],
  selectedFilters: new Map(),
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
    default:
      return state;
  }
}
