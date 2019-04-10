import * as React from "react";
import * as style from "./style.scss";
import YesNo from "containers/YesNo";

class Content extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <p className={style.content}>
          Lorem Ipsum ist ein einfacher Demo-Text für die Print- und
          Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der
          Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine
          Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch
          zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch
          in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke,
          nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von
          "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop
          Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.
        </p>
        <YesNo />
      </div>
    );
  }
}

export default Content;
