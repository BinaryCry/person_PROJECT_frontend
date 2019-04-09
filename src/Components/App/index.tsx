import * as React from "react";
import * as style from "./style.scss";

interface IProps {}

interface IState {}

class App extends React.Component<IProps, IState> {
  render() {
    return <h1 className={style.header}>Hello, World!</h1>;
  }
}

export default App;
