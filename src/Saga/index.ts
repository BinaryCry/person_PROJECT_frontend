import { all } from "redux-saga/effects";
import yesno from "./yesno";
import fibo from "./fibo";
import upload from "./upload";

export default function* rootSaga() {
  yield all([yesno(), fibo(), upload()]);
}
