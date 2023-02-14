function printOddSequence(n) {
  for (let i = 0; i < n * n; i += 2) {
    let str = "";
    for (let j = i; j < n * n; j++) {
      console.log(j);
    }
  }
}

printOddSequence(4);
