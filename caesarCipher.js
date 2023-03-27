const caesarCipher = (s, k) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let ascii = s[i].charCodeAt() + k;
    if (s[i] !== "-") {
      if (ascii >= 123) {
        let remaining = k - ascii + 123;
        result += String.fromCharCode(96 + remaining + 1);
      } else {
        result += String.fromCharCode(ascii);
      }
    } else {
      result += "-";
    }
  }
  return result;
};

console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5));
// "Always-Look-on-the-Bright-Side-of-Life"
