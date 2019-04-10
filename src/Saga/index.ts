import { all } from "redux-saga/effects";
import yesno from "./yesno";
import fibo from "./fibo";

export default function* rootSaga() {
  yield all([yesno(), fibo()]);
}
