const plusMinus = (arr) => {
  let zero = 0;
  let plusNum = 0;
  let minusNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      minusNum++;
    } else if (arr[i] > 0) {
      plusNum++;
    } else {
      zero++;
    }
  }
  console.log(plusNum / arr.length);
  console.log(minusNum / arr.length);
  console.log(zero / arr.length);
};

plusMinus([-4, 3, -9, 0, 4, 1]);
