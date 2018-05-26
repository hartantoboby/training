/**
 * Blog Sagas
 */
import * as contentful from "contentful";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./../Blog";
import * as types from "./types";
const client = contentful.createClient({
  space: "445ygst492nm",
  accessToken:
    "318c598b0fff8e10f5f6d8e22894cfc06ec45b6a38944098cc696994217575aa"
});
const fetchPosts = () => client.getEntries();
function* getBlogPosts() {
  try {
    const posts = yield call(fetchPosts);
    yield put(actions.success(posts.items));
  } catch (e) {
    console.log(e);
    yield put(actions.error(e));
  }
}
export default function*() {
  yield all([takeLatest(types.GET_BLOG_ASYNC.PENDING, getBlogPosts)]);
}
