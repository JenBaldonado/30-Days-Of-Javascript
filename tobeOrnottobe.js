/* function expect(val) {
  return {
    toBe: otherVal => {
      if (otherVal === val) {
        return true;
      } else {
        throw new Error('Not Equal');
      }
    },
    notToBe: otherVal => {
      if (otherVal !== val) {
        return true;
      } else {
        return 'Equal';
      }
    },
  };
}
 */

function expect(val) {
  return {
    toBe: otherVal => {
      if (val !== otherVal) throw new Error('Not Equal');
      return true;
    },
    notToBe: otherVal => {
      if (val === otherVal) throw new Error('Equal');
      return true;
    },
  };
}
console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
