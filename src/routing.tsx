import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Content from "./Components/Content";

export default () => {

  return (
    <Router>
        <div>
          <Header />
          <Route path="/content" component={Content} exact />
        </div>
    </Router>
  );
};