import { FIBO_START_CALC } from "../Constants/actionTypes";

export const fiboStartCalc = (count: number) => ({
  type: FIBO_START_CALC,
  data: count
});
