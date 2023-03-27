const reverseArr = (a) => {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[a.length - i]);
  }
  return result;
};
