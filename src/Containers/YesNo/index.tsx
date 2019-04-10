import YesNo from "components/YesNo";
import { connect } from "react-redux";
import { fetchYesNo } from "actions/yesno";
import { IStore } from "store";
import { Dispatch } from "redux";
import { createSelector } from "reselect";

const yesnoSelector = (state: IStore) => state.yesno;
const yesnoValueSelector = createSelector(
  yesnoSelector,
  yesno => yesno.value
);
const yesnoImgSelector = createSelector(
  yesnoSelector,
  yesno => yesno.img
);

const mapStateToProps = (state: IStore) => ({
  yesno: {
    value: yesnoValueSelector(state),
    img: yesnoImgSelector(state)
  }
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchYesNo: () => dispatch(fetchYesNo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YesNo);
