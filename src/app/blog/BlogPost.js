import React from "react";
import PageContent from "./../components/PageContent";
import BlogNav from "./BlogNav";
import BlogContent from "./BlogContent";
const BlogPost = ({
  location: {
    state: { props }
  }
}) => (
  <PageContent>
    <BlogNav date={props.date} status={props.status} to="/blog" />
    <BlogContent {...props} />
  </PageContent>
);
export default BlogPost;
