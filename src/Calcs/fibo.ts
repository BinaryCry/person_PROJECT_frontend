export const reqFib = (n: number): number => {
  return n <= 1 ? n : reqFib(n - 1) + reqFib(n - 2);
};