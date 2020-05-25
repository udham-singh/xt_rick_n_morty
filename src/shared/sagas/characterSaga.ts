import { all, put, call, takeLatest, fork, select } from "redux-saga/effects";
import { getCall } from "../apis/http";
import { URL_CHARACTERS } from "../apis/constants";
import * as actionTypes from "../store/characters/actionTypes";
import * as actions from "../store/characters/actions";
import {
  selectCharacters,
  selectAppliedFilters,
  selectSortOptions,
} from "../selectors";
import { Character } from "../models/character";
import { SortDirection } from "../constants";

function* getCharactersAPI({ searchParams }: actionTypes.GetCharactersAction) {
  try {
    const filters = yield select(selectAppliedFilters);
    const { direction, param } = yield select(selectSortOptions);
    const response = yield call(getCall, URL_CHARACTERS, {
      ...searchParams,
      ...filters,
    });
    const charactersData = response.data.results;
    const totalPages = response.data.info.pages;
    yield put(actions.getCharactersSuccess(charactersData, totalPages));
    if (param !== "none") {
      yield put(actions.sortCharacters(direction, param));
    }
  } catch (e) {
    yield put(actions.getCharactersFailed(e));
  }
}

function* sortCharacters({ direction, param }: actionTypes.SortCharacters) {
  const characters = yield select(selectCharacters);
  const charactersToSort = characters.map((c: Character) => new Character(c));
  const multiplier = direction === SortDirection.Asc ? 1 : -1;
  if (param) {
    charactersToSort.sort((character1: any, character2: any) =>
      character1[param] > character2[param] ? 1 * multiplier : -1 * multiplier
    );
  } else {
    charactersToSort.sort(
      (character1: any, character2: any) =>
        (character1.id - character2.id) * multiplier
    );
  }
  yield put(actions.sortCharactersSuccess(charactersToSort));
}

function* watchCharacterActions() {
  yield takeLatest(actionTypes.GET_CHARACTERS, getCharactersAPI);
  yield takeLatest(actionTypes.SORT_CHARACTERS, sortCharacters);
}

export default function* characterSaga() {
  yield all([fork(watchCharacterActions)]);
}
