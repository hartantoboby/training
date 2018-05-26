/**
 * Blog Reducer
 */
import initialState from "./../initialState";
import { createReducer } from "./../Utilities";
import * as types from "./types";
export default createReducer(initialState.blog, {
  [types.GET_BLOG_ASYNC.PENDING](state) {
    return {
      ...state,
      loading: true
    };
  },
  [types.GET_BLOG_ASYNC.SUCCESS](state, action) {
    return {
      ...state,
      posts: action.posts,
      loading: false
    };
  },
  [types.GET_BLOG_ASYNC.ERROR](state) {
    return {
      ...state,
      loading: false
    };
  }
});
