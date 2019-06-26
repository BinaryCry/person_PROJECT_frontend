import { createReducer } from "redux-create-reducer";
import {
  FIBO_CALC_SUCCESS,
  FIBO_SET_COUNT,
  FIBO_START_CALC
} from "../Constants/actionTypes";
import { IFibo } from "../Store/interface";

const initialState: IFibo = {
  count: null,
  result: null,
  isInProgress: false
};

const fibo = createReducer(initialState, {
  [FIBO_SET_COUNT]: (state, action) => ({
    ...state,
    count: parseInt(action.data)
  }),
  [FIBO_START_CALC]: state => ({ ...state, isInProgress: true }),
  [FIBO_CALC_SUCCESS]: (state, action) => ({
    ...state,
    result: action.data,
    isInProgress: false
  })
});

export default fibo;
