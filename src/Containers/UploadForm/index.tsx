import UploadForm from "components/UploadForm";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "store";
import { fetchUploadedFilesAction } from "actions/upload";

const mapStateToProps = (state: IStore) => ({
  uploadedFiles: state.uploadedFiles
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUploadedFiles: () => dispatch(fetchUploadedFilesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
