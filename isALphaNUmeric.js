const isAlphaNumeric = (str) => {
  let num = "01234567890";
  for (let i = 0; i < str.length; i++) {
    if (str.includes(num[i])) {
      return "is  alphanumeric";
    }
  }
  return "is not alphanumeric";
};

console.log(isAlphaNumeric("arun"));
