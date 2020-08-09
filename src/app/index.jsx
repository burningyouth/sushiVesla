import React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarView";
import Footer from "./components/Footer/FooterView";
import Home from "./pageViews/HomeView";
import Catalog from "./pageViews/CatalogView";

render(
  <BrowserRouter>
    <Route component={Navbar} />
    <Route exact path="/" component={Home} />
    <Route exact path="/catalog" component={Catalog} />
    <Route component={Footer} />
  </BrowserRouter>,
  document.getElementById("root")
);
