var once = function (fn) {
  let calledOnce = false;
  let result;
  return function (...args) {
    if (!calledOnce) {
      result = fn(...args);
      calledOnce = true;
      return result;
    }

    return undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
