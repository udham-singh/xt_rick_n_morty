import { Character } from "../../models/character";
import { SortParam, SortDirection } from "../../constants";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_FAILED = "GET_CHARACTERS_FAILED";
export const SET_CHARACTERS_PAGE = "SET_CHARACTERS_PAGE";
export const SET_CHARACTERS_SEARCH_TERM = "SET_CHARACTERS_SEARCH_TERM";
export const SORT_CHARACTERS = "SORT_CHARACTERS";
export const SORT_CHARACTERS_SUCCESS = "SORT_CHARACTERS_SUCCESS";
export const ADD_CHARACTER_FILTER = "ADD_CHARACTER_FILTER";
export const REMOVE_CHARACTER_FILTER = "REMOVE_CHARACTER_FILTER";

export interface GetCharactersAction {
  type: typeof GET_CHARACTERS;
  searchParams: any;
}

export interface GetCharactersSuccessAction {
  type: typeof GET_CHARACTERS_SUCCESS;
  characters: Character[];
  totalPages: number;
}
export interface GetCharactersFailedAction {
  type: typeof GET_CHARACTERS_FAILED;
  error: string
}

export interface SetCharactersPage {
  type: typeof SET_CHARACTERS_PAGE;
  page: number;
}

export interface SetCharactersSearchTerm {
  type: typeof SET_CHARACTERS_SEARCH_TERM;
  searchTerm: string;
}

export interface SortCharacters {
  type: typeof SORT_CHARACTERS;
  param: SortParam;
  direction: SortDirection;
}

export interface SortCharactersSuccess {
  type: typeof SORT_CHARACTERS_SUCCESS;
  sortedCharacters: Character[];
}
export interface AddCharacterFilter {
  type: typeof ADD_CHARACTER_FILTER;
  category: string;
  option: string;
}
export interface RemoveCharacterFilter {
  type: typeof REMOVE_CHARACTER_FILTER;
  category: string;
}

export type CharacterAction =
  | GetCharactersAction
  | GetCharactersSuccessAction
  | GetCharactersFailedAction
  | SetCharactersPage
  | SetCharactersSearchTerm
  | SortCharacters
  | SortCharactersSuccess
  | AddCharacterFilter
  | RemoveCharacterFilter;
