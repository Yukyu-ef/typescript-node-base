import * as Enumerable from "linq-es2015";

console.log(Enumerable.range(0, 100).Sum());

const calcMethod = () => {
  let n = 0;

  for (let i = 0; i < 101; i++) {
    n = n + i;
  }
  return n;
};

console.log(calcMethod());
