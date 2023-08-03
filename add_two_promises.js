var addTwoPromises = async function (promise1, promise2) {
  try {
    const one = await promise1;
    const two = await promise2;

    return one + two;
  } catch (error) {
    throw error;
  }
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
