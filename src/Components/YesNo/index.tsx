import * as React from "react";
import * as style from "./style.scss";
import { IProps, IState } from "./interface";

class YesNo extends React.Component<IProps, IState> {
  state = {
    fiboCount: "5"
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ fiboCount: event.target.value });
  };

  handleFiboCountSubmit = () => {
    const count = parseInt(this.state.fiboCount);
    if (!Number.isNaN(count)) this.props.fiboSetCount(this.state.fiboCount);
  };

  render() {
    const { yesno, fetchYesNo, fibo, isReselectionOn } = this.props;
    return (
      <div className={style.yn}>
        <button onClick={() => fetchYesNo()}>Yes/No?</button>
        {(yesno.value || yesno.value === false) && (
          <span className={style.ynt}>{yesno.value}</span>
        )}
        <br />
        {yesno.img && <img className={style.yni} src={yesno.img} />}
        <br />
        <button
          onClick={this.handleFiboCountSubmit}
          disabled={fibo.isInProgress}
        >
          Fibo
        </button>
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.fiboCount}
          disabled={fibo.isInProgress}
        />
        {fibo && <span className={style.fibo}>{fibo.result}</span>}
        <br />
        <br />
        {isReselectionOn ? (
          <span className={style.fibo}>Sqr: {this.props.sqr}</span>
        ) : (
          "reselection is diabled"
        )}
      </div>
    );
  }
}

export default YesNo;
