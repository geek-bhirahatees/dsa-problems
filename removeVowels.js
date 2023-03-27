const readline = require("readline-sync");

const removeVowels = (str) => {
  const vowels = "aeiou";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }
  return result;
};

let input = readline.question("Enter the string : ");

console.log(removeVowels(input));
