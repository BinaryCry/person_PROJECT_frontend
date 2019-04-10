import { reqFib } from "../Calcs/fibo";

const ctx: Worker = self as any;

ctx.addEventListener("message", arg => {
  if (arg.data.n) {
    postMessage(reqFib(arg.data.n));
  } else {
    postMessage(null);
  }
});
