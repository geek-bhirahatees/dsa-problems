const toUppercase = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let charCodeAt = string.charCodeAt(i);
    if (charCodeAt >= 97 && charCodeAt <= 122) {
      result = result + String.fromCharCode(charCodeAt - 32);
    } else {
      result = result + String.fromCharCode(charCodeAt);
    }
  }
  return result;
};

console.log(toUppercase("arun"));
