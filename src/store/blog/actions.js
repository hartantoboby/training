/**
 * Blog Actions
 */
import * as types from "./types";
export function loadBlogSuccess(post) {
  return { type: types.LOAD_BLOG_POSTS_SUCCESS, post };
}
export function blogLoading(isLoading = true) {
  return { type: types.BLOG_LOADING, isLoading };
}
