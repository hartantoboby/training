import { createAction } from "./Utilities";
import * as types from "./blog/types";
export const actions = {
  pending: () => createAction(types.GET_BLOG_ASYNC.PENDING),
  success: posts => createAction(types.GET_BLOG_ASYNC.SUCCESS, { posts }),
  error: error => createAction(types.GET_BLOG_ASYNC.ERROR, { error })
};
