import React from "react";
import { render } from "react-dom";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarView";
import Footer from "./components/Footer/FooterView";
import Home from "./pageViews/HomePageView";
import Catalog from "./pageViews/CatalogPageView";

render(
  <Router>
    <Route component={Navbar} />
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/catalog" component={Catalog}></Route>
    </Switch>
    <Route component={Footer} />
  </Router>,
  document.getElementById("root")
);
