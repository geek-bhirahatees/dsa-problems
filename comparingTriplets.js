const comparingTriplets = (a, b) => {
  let aScore = 0;
  let bScore = 0;
  for (let i = 0; i < a.length || i < b.length; i++) {
    if (a[i] > b[i]) {
      aScore++;
    } else if (a[i] < b[i]) {
      bScore++;
    }
  }
  return [aScore, bScore];
};

console.log(comparingTriplets([5, 6, 7], [3, 6, 10]));
