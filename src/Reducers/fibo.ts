import { createReducer } from "redux-create-reducer";
import { FIBO_CALC_SUCCESS, FIBO_SET_COUNT } from "../Constants/actionTypes";

const initialState: { count: number; result: number } = {
  count: null,
  result: null
};

const fibo = createReducer(initialState, {
  [FIBO_SET_COUNT]: (state, action) => ({ ...state, count: parseInt(action.data) }),
  [FIBO_CALC_SUCCESS]: (state, action) => ({ ...state, result: action.data })
});

export default fibo;
