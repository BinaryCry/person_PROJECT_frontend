import { put, takeEvery } from "redux-saga/effects";
import { uploadFile, fetchUploadedFiles } from "../API/upload";
import {
  FETCH_UPLOADED_FILES,
  FETCH_UPLOADED_FILES_SUCCESS,
  FETCH_UPLOADED_FILES_FAIL,
  UPLOAD_FILE,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAIL
} from "../Constants/actionTypes";
import { AxiosResponse } from "axios";

function* g_fetchUploadedFiles() {
  const res: AxiosResponse = yield fetchUploadedFiles();
  if (res) {
    if (res.status >= 400) {
      yield put({ type: FETCH_UPLOADED_FILES_FAIL, res });
      console.log(res.status, res.statusText);
    } else {
      yield put({
        type: FETCH_UPLOADED_FILES_SUCCESS,
        fileNames: res.status === 204 ? [] : res.data.fileNames
      });
    }
  }
}

export default function*() {
  yield takeEvery(FETCH_UPLOADED_FILES, g_fetchUploadedFiles);
}
