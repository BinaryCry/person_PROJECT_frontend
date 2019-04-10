import { put, takeEvery } from "redux-saga/effects";
import { fiboCalcHelper } from "../Helpers";
import {
  FIBO_SET_COUNT,
  FIBO_START_CALC
} from "../Constants/actionTypes";

function* fiboSetCount(action: any) {
  yield put({type: FIBO_SET_COUNT, data: action.data})
  fiboCalcHelper(action.data);
}

export default function*() {
  yield takeEvery(FIBO_START_CALC, fiboSetCount);
}
