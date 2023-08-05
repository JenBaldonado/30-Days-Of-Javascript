function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).length === 0;
  } else {
    throw new Error(
      'Invalid input. The input should be an object or an array.'
    );
  }
}

const object = { x: 5, y: 42 };

console.log(isEmpty(object));
