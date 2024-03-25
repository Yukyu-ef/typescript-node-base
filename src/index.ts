import Enumerable from "linq";

// console.log(Enumerable.range(0, 100).sum());

const calcMethod = () => {
  let n = 0;

  for (let i = 0; i < 101; i++) {
    n = n + i;
  }
  return n;
};

console.log(calcMethod());
