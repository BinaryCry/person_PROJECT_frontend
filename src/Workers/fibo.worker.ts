const ctx: Worker = self as any;

const fib = (n: number): number => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

ctx.addEventListener("message", arg => {
  if (arg.data.n) {
    postMessage(fib(arg.data.n));
  } else {
    postMessage(null);
  }
});
