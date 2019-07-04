import UploadForm from "components/UploadForm";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "store";
import { fetchUploadedFilesAction, uploadFile } from "actions/upload";

const mapStateToProps = (state: IStore) => ({
  uploadedFiles: state.uploadedFiles
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUploadedFiles: () => dispatch(fetchUploadedFilesAction()),
  uploadFile: (formdata: FormData) => dispatch(uploadFile(formdata))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
