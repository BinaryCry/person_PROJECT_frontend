import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import reducers from "../Reducers";
import rootSaga from "../Saga";
import { IYesNO, IFibo } from "./interface";

export interface IStore {
  yesno: IYesNO;
  fibo: IFibo;
  uploadedFiles: string[];
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
