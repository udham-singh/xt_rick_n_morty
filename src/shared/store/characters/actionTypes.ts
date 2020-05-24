import { Character } from "../../models/character";
import { SortParam, SortDirection } from "../../constants";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const SET_CHARACTERS_PAGE = "SET_CHARACTERS_PAGE";
export const SET_CHARACTERS_SEARCH_TERM = "SET_CHARACTERS_SEARCH_TERM";
export const SORT_CHARACTERS = "SORT_CHARACTERS";
export const SORT_CHARACTERS_SUCCESS = "SORT_CHARACTERS_SUCCESS";

export interface GetCharactersAction {
  type: typeof GET_CHARACTERS;
  searchParams: any;
}

export interface GetCharactersSuccessAction {
  type: typeof GET_CHARACTERS_SUCCESS;
  characters: Character[];
  totalPages: number;
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

export type CharacterAction =
  | GetCharactersAction
  | GetCharactersSuccessAction
  | SetCharactersPage
  | SetCharactersSearchTerm
  | SortCharacters
  | SortCharactersSuccess;
