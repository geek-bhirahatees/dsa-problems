const isAlphabet = (character) => {
  let num = "01234567890";
  if (num.includes(character)) {
    return "It is not alphabet";
  }
  return "It is alphabet";
};

console.log(isAlphabet("8"));
