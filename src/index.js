import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Link, HashRouter } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import OurWork from "views/OurWork/OurWork.js";
import AboutUs from "views/AboutUs/AboutUs";
import ContactUs from "views/ContactUs/ContactUs";

var hist = createBrowserHistory();

ReactDOM.render(
  // <HashRouter basename="/">
  //       <div>
  //         <Route path="/our-work" component={OurWork} />
  //         <Route path="/about-us" component={AboutUs} />
  //         <Route path="/contact-us" component={ContactUs} />
  //         <Route path="/" component={LandingPage} />
  //       </div>
  //     </HashRouter>,
  <Router basename={process.env.PUBLIC_URL} history={hist}>
    <Switch>
      <Route path="/our-work" component={OurWork} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,

  // <HashRouter basename={process.env.PUBLIC_URL}>
  //      <Route path="/our-work" component={OurWork} />
  //      <Route path="/about-us" component={AboutUs} />
  //      <Route path="/contact-us" component={ContactUs} />
  //      <Route path="/" component={LandingPage} />
  // </HashRouter>,
  document.getElementById("root")
);
