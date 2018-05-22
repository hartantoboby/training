import React from "react";
import BlogNav from "./BlogNav";
import BlogContent from "./BlogContent";
const BlogItem = props => (
  <div className="box">
    <BlogContent limit={150} {...props}>
      <BlogNav
        date={props.date}
        to={{
          pathname: `/blog/${props.path}`,
          state: { props }
        }}
      />
    </BlogContent>
  </div>
);
export default BlogItem;
