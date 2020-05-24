import { all, fork } from "redux-saga/effects";
import CharacterSaga from "./characterSaga";

export default function* rootSaga() {
  yield all([fork(CharacterSaga)]);
}
