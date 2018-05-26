/**
 * Blog Actions
 */
import * as types from "./types";
export function loadMediumSuccess(post) {
  return { type: types.LOAD_MEDIUM_SUCCESS, post };
}
export function mediumLoading(isLoading = true) {
  return { type: types.MEDIUM_LOADING, isLoading };
}
