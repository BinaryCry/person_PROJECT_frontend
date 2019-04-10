import YesNo from "components/YesNo";
import { connect } from "react-redux";
import { fetchYesNo } from "actions/yesno";
import { Dispatch } from "redux";
import { createSelector } from "reselect";
import { yesnoSelector, fiboSelector } from "selectors";
import { IStore } from "store";
import { fiboCalcHelper } from "../../helpers";

const yesnoValueSelector = createSelector(
  yesnoSelector,
  yesno => yesno.value
);

const yesnoImgSelector = createSelector(
  yesnoSelector,
  yesno => yesno.img
);

const fiboValueSelector = createSelector(
  fiboSelector,
  fibo => fibo
);

const mapStateToProps = (state: IStore) => ({
  yesno: {
    value: yesnoValueSelector(state),
    img: yesnoImgSelector(state)
  },
  fibo: fiboValueSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchYesNo: () => dispatch(fetchYesNo()),
  calcFibo: (n: number) => fiboCalcHelper(n)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YesNo);
