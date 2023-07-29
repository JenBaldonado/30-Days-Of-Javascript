var filter = function (arr, fn) {
  let n = arr.length;
  let filteredArr = [];

  for (let i = 0; i < n; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

function isEven(num) {
  return num % 2 === 0;
}

const filteredArr = [1, 2, 3, 4, 5];

console.log(filter(filteredArr, isEven));
