import * as React from "react";
import { IProps, IState } from "./interface";
import UploadForm from "containers/UploadForm";
import HookC from "components/HookC"

export default class ComponentName extends React.Component<IProps, IState> {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <p>Index page</p>
        <UploadForm />
        <HookC id={1} />
      </div>
    );
  }
}
