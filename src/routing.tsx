import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "components/Header";
import Content from "components/Content";
import Index from "components/Index";

const NM = () => <div>Not Found, 404</div>;
const OrigU = () => <div>Origin User</div>;
const U = (props: any) => {
  console.log(props);
  return <div>User Component: {props.match.params.id}</div>;
};

const styles: React.CSSProperties = {
  padding: "15px"
};

export default () => {
  return (
    <Router>
      <Header />
      <div style={styles}>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/content" component={Content} />
          <Route path="/user" exact component={OrigU} />
          <Route path="/user/:id" component={U} />
          <Route component={NM} />
        </Switch>
      </div>
    </Router>
  );
};
