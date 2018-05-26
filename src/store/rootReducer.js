import { combineReducers } from "redux";
import blog from "./blog/reducer";
import medium from "./medium/reducer";
export const rootReducer = combineReducers({
  blog,
  medium
});
