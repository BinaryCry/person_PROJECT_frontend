import { all } from "redux-saga/effects";
import yesno from "./yesno";

export default function* rootSaga() {
  yield all([yesno()]);
}
