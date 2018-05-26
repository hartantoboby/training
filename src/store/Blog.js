import * as contentful from "contentful";
import * as actions from "./blog/actions";
const client = contentful.createClient({
  space: "445ygst492nm",
  accessToken:
    "318c598b0fff8e10f5f6d8e22894cfc06ec45b6a38944098cc696994217575aa"
});
const error = err => console.log(err);
export function loadBlog() {
  return dispatch => {
    dispatch(actions.blogLoading());
    return client
      .getEntries()
      .then(({ items }) => {
        setTimeout(() => {
          dispatch(actions.loadBlogSuccess(items));
          dispatch(actions.blogLoading(false));
        }, 5000);
      })
      .catch(error => {
        console.log(error);
        dispatch(actions.blogLoading(false));
      });
  };
}
