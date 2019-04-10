import YesNo from "components/YesNo";
import { connect } from "react-redux";
import { fetchYesNo } from "actions/yesno";
import { IStore } from "store";
import { Dispatch } from "redux";

const mapStateToProps = (state: IStore) => ({
  yesno: {
    value: state.yesno.value,
    img: state.yesno.img
  }
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchYesNo: () => dispatch(fetchYesNo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YesNo);
