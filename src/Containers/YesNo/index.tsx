import YesNo from "components/YesNo";
import { connect } from "react-redux";
import { fetchYesNo } from "actions/yesno";
import { fiboStartCalc } from "actions/fibo";
import { Dispatch } from "redux";
import { createSelector } from "reselect";
import { fiboCSelector } from "selectors";
import { IStore } from "store";
import { reqFib } from "../../Calcs/fibo";

const fiboCountSqrSelector = createSelector(
  [fiboCSelector],
  fiboCount => reqFib(fiboCount)
);

const mapStateToProps = (state: IStore) => ({
  yesno: state.yesno,
  fibo: state.fibo,
  sqr: fiboCountSqrSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchYesNo: () => dispatch(fetchYesNo()),
  fiboSetCount: (n: number) => dispatch(fiboStartCalc(n))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YesNo);
