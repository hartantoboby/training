import React from "react";
import * as contentful from "contentful";
import BlogItem from "./blog/BlogItem";
import PageHeader from "./components/PageHeader";
class Blog extends React.Component {
  state = {
    posts: []
  };
  client = contentful.createClient({
    space: "445ygst492nm",
    accessToken:
      "318c598b0fff8e10f5f6d8e22894cfc06ec45b6a38944098cc696994217575aa"
  });
  fetchPosts = () => this.client.getEntries();
  setPosts = response => {
    console.log(response.items);
    this.setState({
      posts: response.items
    });
  };
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
          Your standard <strong>JavaScript</strong> programming blog, albeit,
          probably not very good, but I will at least try to keep it
          entertaining. This blog is a chronological mix of random posts on
          Angular, React, Functional Programming, and my{" "}
          <strong>project walkthroughs</strong>.
        </PageHeader>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <BlogItem key={i} {...fields} />
        ))}
      </div>
    );
  }
}
export default Blog;
