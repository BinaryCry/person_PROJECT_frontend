import * as React from "react";
import * as style from "./style.scss";

class YesNo extends React.Component<
  {
    yesno: { value: boolean; img: string };
    fetchYesNo: Function;
    fiboSetCount: Function;
    fibo: {
      count: number;
      result: number;
    };
    sqr: number;
  },
  { fiboCount: number }
> {
  state = {
    fiboCount: 5
  };

  handleChange = (event: any) => {
    this.setState({ fiboCount: event.target.value});
  };

  render() {
    const { yesno, fetchYesNo, fiboSetCount, fibo, sqr } = this.props;
    return (
      <div className={style.yn}>
        <button onClick={() => fetchYesNo()}>Yes/No?</button>
        {(yesno.value || yesno.value === false) && (
          <span className={style.ynt}>{yesno.value}</span>
        )}
        <br />
        {yesno.img && <img className={style.yni} src={yesno.img} />}
        <button onClick={() => fiboSetCount(this.state.fiboCount)}>Fibo</button>
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.fiboCount}
        />
        {fibo && <span className={style.fibo}>{fibo.result}</span>}
        <br />
        <br />
        {sqr && <span className={style.fibo}>Sqr: {sqr}</span>}
      </div>
    );
  }
}

export default YesNo;
