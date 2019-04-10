import FiboWorker from "worker-loader!../Workers/fibo.worker.ts";
import store from "store";
import { FIBO_CALC_SUCCESS } from "../Constants/actionTypes";

export const fiboCalcHelper = (function() {
  const memo: { [key: number]: number } = {};

  function m(n: number) {
    if (n in memo) {
      store.dispatch({ type: FIBO_CALC_SUCCESS, data: memo[n] });
    } else {
      const fiboW = new FiboWorker();
      fiboW.postMessage({ n });
      fiboW.addEventListener("message", res => {
        if (res.data) {
          memo[n] = res.data;
          store.dispatch({ type: FIBO_CALC_SUCCESS, data: res.data });
        } else console.log("Fibo calcs error");
      });
    }
  }

  return m;
})();
