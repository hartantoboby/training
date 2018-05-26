import React from "react";
import { connect } from "react-redux";
import * as contentful from "contentful";
import BlogItem from "./blog/BlogItem";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";
import { Loader } from "./components/Loader";
import { actions } from "./../store/Blog";
class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadBlog();
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
        {this.props.blog.loading ? (
          <Loader className="has-text-primary" />
        ) : (
          <PageContent>
            {this.props.blog.posts.map(({ fields }, i) => (
              <BlogItem key={i} {...fields} />
            ))}
          </PageContent>
        )}
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  };
}
const mapDispatchToProps = dispatch => {
  return {
    loadBlog: () => dispatch(actions.pending())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
