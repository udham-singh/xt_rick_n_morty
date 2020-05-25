import { Character } from "../../models/character";
import * as actions from "./actionTypes";
import { SortDirection, SortParam } from "../../constants";

export const getCharacters = (
  searchParams: any
): actions.GetCharactersAction => ({
  type: actions.GET_CHARACTERS,
  searchParams,
});

export const getCharactersSuccess = (
  characters: Character[],
  totalPages: number
): actions.GetCharactersSuccessAction => ({
  type: actions.GET_CHARACTERS_SUCCESS,
  characters,
  totalPages,
});
export const getCharactersFailed = (
  error: string
): actions.GetCharactersFailedAction => ({
  type: actions.GET_CHARACTERS_FAILED,
  error,
});

export const setCharactersSearchTerm = (
  searchTerm: string
): actions.SetCharactersSearchTerm => ({
  type: actions.SET_CHARACTERS_SEARCH_TERM,
  searchTerm,
});

export const setCharactersPage = (page: number): actions.SetCharactersPage => ({
  type: actions.SET_CHARACTERS_PAGE,
  page,
});

export const sortCharacters = (
  direction: SortDirection,
  param: SortParam
): actions.SortCharacters => ({
  type: actions.SORT_CHARACTERS,
  direction,
  param,
});

export const sortCharactersSuccess = (
  sortedCharacters: Character[]
): actions.SortCharactersSuccess => ({
  type: actions.SORT_CHARACTERS_SUCCESS,
  sortedCharacters,
});

export const addCharacterFilter = (
  category: string,
  option: string
): actions.AddCharacterFilter => ({
  type: actions.ADD_CHARACTER_FILTER,
  category,
  option,
});

export const removeCharacterFilter = (
  category: string
): actions.RemoveCharacterFilter => ({
  type: actions.REMOVE_CHARACTER_FILTER,
  category,
});
