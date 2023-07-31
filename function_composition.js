var compose = function (functions) {
  if (functions.length === 0) {
    return x => x;
  }

  return function (x) {
    let result = functions[functions.length - 1](x);

    for (let i = functions.length - 2; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9
