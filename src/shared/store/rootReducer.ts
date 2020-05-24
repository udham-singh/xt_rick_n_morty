import { combineReducers } from "redux";
import characters from "./characters/reducer";

const rootReducer = combineReducers({
  characters,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
