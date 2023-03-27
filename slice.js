function slice(string, seprator) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < seprator.length; j++) {
      if (!string[i] === seprator[j]) {
        continue;
      }
    }
    result += string[i];
  }
  return result;
}
console.log(slice("Bhirahatees", "aha"));
