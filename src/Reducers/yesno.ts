import { createReducer } from "redux-create-reducer";
import {
  FETCH_YESNO_FAIL,
  FETCH_YESNO_SUCCESS
} from "../Constants/actionTypes";

const initialState: { value: boolean; img: string } = {
  value: null,
  img: null
};

const yesno = createReducer(initialState, {
  // [FETCH_YESNO_FAIL]: state => state,
  [FETCH_YESNO_SUCCESS]: (state, action) => ({
    value: action.data.value,
    img: action.data.img
  })
});

export default yesno;
