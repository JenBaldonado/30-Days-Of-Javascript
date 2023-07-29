var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
const arr = [1, 2, 3, 4, 5];
function fn(a, b) {
  return a + b;
}
console.log(reduce(arr, fn, 0));
