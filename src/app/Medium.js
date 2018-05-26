import React from "react";
import { connect } from "react-redux";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";
import { Loader } from "./components/Loader";
import axios from "axios";
import MediumItem from "./medium/MediumItem";
import { loadMedium } from "../store/Medium";
class Medium extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidMount() {
    this.props.loadMedium();
  }
  render() {
    return (
      <div>
        <PageHeader color="is-dark" title="Medium">
          Medium is where I ramble and rant and tell stories. I orginally was
          going to use it as a coding blog, I don't like having to use Gist for
          all my code snippets. So I created this site.
          <br />
          <br />
          <a
            className="button is-inverted is-outlined"
            href="https://medium.com/@aaron.klaser"
            target="_blank"
          >
            View My Medium
            <span className="icon" style={{ marginLeft: 5 }}>
              <i className="fab fa-lg fa-medium" />
            </span>
          </a>
        </PageHeader>
        <PageContent>
          {this.props.medium.loading ? (
            <Loader className="has-text-primary" />
          ) : (
            <PageContent>
              {this.props.medium.posts.map((post, i) => (
                <MediumItem key={i} {...post} />
              ))}
            </PageContent>
          )}
        </PageContent>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { medium: state.medium };
}
const mapDispatchToProps = dispatch => {
  return {
    loadMedium: () => dispatch(loadMedium())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Medium);
