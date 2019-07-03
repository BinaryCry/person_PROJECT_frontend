import { combineReducers } from "redux";
import yesno from "./yesno";
import fibo from "./fibo";
import uploadedFiles from "./fetchUploaded";

const reducers = combineReducers({
  yesno,
  fibo,
  uploadedFiles
});

export default reducers;
