const camelCase = (s) => {
  let j = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i].toLowerCase()) {
      j++;
    }
  }
  return j;
};

console.log(camelCase());
