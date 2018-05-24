import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../Home";
import Blog from "./../Blog";
import BlogPost from "./../blog/BlogPost";
import Medium from "./../Medium";
const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/blog/:blogPost" component={BlogPost} />
    <Route path="/blog" component={Blog} />
    <Route path="/mediumPost" component={Medium} />
  </Switch>
);
export default Router;
