import { combineReducers } from "redux";
import characters, {
  INITIAL_STATE as CharactersInitState,
} from "./characters/reducer";

export const APP_INITIAL_STATE = {
  characters: CharactersInitState,
};

const rootReducer = combineReducers({
  characters,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
