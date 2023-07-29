var map = function (arr, fn) {
  const n = arr.length;
  const transformedArray = [];

  for (let i = 0; i < n; i++) {
    transformedArray.push(fn(arr[i], i));
  }

  return transformedArray;
};

function multiplyByIndex(value, index) {
  return value * index;
}

const transformedArr = [1, 3, 5];

console.log(map(transformedArr, multiplyByIndex));
