const randomFinder = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

console.log(
  randomFinder([
    "Akshaya Sivakumar",
    "Bhirahatees",
    "Arun",
    "Jaya",
    "Ishu",
    "Gopi",
    "Logesh",
    "Saran",
    "Veerboy",
    "Abdul Razzak",
  ])
);
