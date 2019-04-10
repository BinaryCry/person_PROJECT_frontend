import { createReducer } from "redux-create-reducer";
import { FIBO_CALC_SUCCESS } from "../Constants/actionTypes";

const initialState: number = null;

const fibo = createReducer(initialState, {
  [FIBO_CALC_SUCCESS]: (state, action) => action.data
});

export default fibo;