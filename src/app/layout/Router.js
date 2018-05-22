import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../Home";
import Blog from "./../Blog";
import BlogPost from "./../blog/BlogPost";
import Test from "./../blog/Test";
const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/blog/:blogPost" component={BlogPost} />
    <Route path="/blog" component={Blog} />
    <Route path="/test" component={Test} />
  </Switch>
);
export default Router;
