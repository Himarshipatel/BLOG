import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Home from "./Home.js";
import Post from "./Singlepost.js";
import Posts from "./Post.js";
import Tags from "./Tags.js";
import Category from "./Category.js";
const Approuter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/category" component={Category} />
          <Route path="/tag" component={Tags} />
          <Route path="/posts" component={Posts} />

          <Route path="/post/:id" component={Post} />

          <Route path="/register" component={Signup} />

          <Route path="/login" component={Login} />

          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Approuter;
