import * as React from "react";
import { IProps, IState } from "./interface";
import UploadForm from "containers/UploadForm";

export default class ComponentName extends React.Component<IProps, IState> {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <p>Index page</p>
        <UploadForm />
      </div>
    );
  }
}
