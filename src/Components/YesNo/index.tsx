import * as React from "react";
import * as style from "./style.scss";

class YesNo extends React.Component<
  { yesno: { value: boolean; img: string }; fetchYesNo: Function },
  {}
> {
  render() {
    const { yesno, fetchYesNo } = this.props;
    return (
      <div className={style.yn}>
        <button onClick={() => fetchYesNo()}>Yes/No?</button>
        {(yesno.value || yesno.value === false) && <span className={style.ynt}>{yesno.value}</span>}
        <br />
        {yesno.img && <img className={style.yni} src={yesno.img} />}
      </div>
    );
  }
}

export default YesNo;
