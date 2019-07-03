import { FETCH_UPLOADED_FILES_SUCCESS } from "../Constants/actionTypes";
import { createReducer } from "redux-create-reducer";

const initialState: string[] = [];

const uploadedFiles = createReducer(initialState, {
  [FETCH_UPLOADED_FILES_SUCCESS]: (state, action) => action.fileNames
});

export default uploadedFiles;
