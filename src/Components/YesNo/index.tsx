import * as React from "react";
import * as style from "./style.scss";

class YesNo extends React.Component<
  {
    yesno: { value: boolean; img: string };
    fetchYesNo: Function;
    calcFibo: Function;
    fibo: number;
  },
  { fiboCount: number }
> {
  state = {
    fiboCount: 5
  };

  handleChange = (event: any) => {
    this.setState({ fiboCount: event.target.value });
  };

  render() {
    const { yesno, fetchYesNo, calcFibo, fibo } = this.props;
    return (
      <div className={style.yn}>
        <button onClick={() => fetchYesNo()}>Yes/No?</button>
        {(yesno.value || yesno.value === false) && (
          <span className={style.ynt}>{yesno.value}</span>
        )}
        <br />
        {yesno.img && <img className={style.yni} src={yesno.img} />}
        <button onClick={() => calcFibo(this.state.fiboCount)}>Fibo</button>
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.fiboCount}
        />
        {fibo && <span className={style.fibo}>{fibo}</span>}
      </div>
    );
  }
}

export default YesNo;
