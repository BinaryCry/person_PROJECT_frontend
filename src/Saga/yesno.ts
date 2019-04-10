import { put, takeEvery } from "redux-saga/effects";
import { fetchYesNo } from "../API/yesno";
import {
  FETCH_YESNO,
  FETCH_YESNO_FAIL,
  FETCH_YESNO_SUCCESS
} from "../Constants/actionTypes";

function* fetchYesNoAPI() {
  const responseResult = yield fetchYesNo();
  if (responseResult) {
    const { status } = responseResult;
    if (status >= 400) {
      debugger;
      yield put({ type: FETCH_YESNO_FAIL });
    } else {
      yield put({
        type: FETCH_YESNO_SUCCESS,
        data: {
          value: responseResult.data.answer,
          img: responseResult.data.image
        }
      });
    }
  }
}

export default function*() {
  yield takeEvery(FETCH_YESNO, fetchYesNoAPI);
}
