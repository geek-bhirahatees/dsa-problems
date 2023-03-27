/**
 * this funtions resturn that string is palindrome or not
 *
 * Ex string = "malayalam"
 *
 * Expected output "It's Palindrome"
 */

function isPalidrome(string) {
  let strLength = string.length - 1;
  for (let i = 0; i <= strLength / 2; i++) {
    // console.log(string[i], string[strLength - i]);
    if (string[i].toLowerCase() !== string[strLength - i].toLowerCase()) {
      return "It's Not Palindrome";
    }
  }
  return "It's Palindrome";
}

// console.log(isPalidrome("Malayalam"));

function isPalidrome3(str) {
  let length = (str.length - 1) / 2;
  let splited;
  if (length % 2 === 0) {
    splited = str.split(s[length]);
  } else {
    splited = str.split(Math.floor(s[length] - 1));
  }
  let revStr = splited[1].split("").reverse().join("");
  if (splited[0] !== revStr) {
    return "It's not Palindrome";
  }
  return "It's Palindrome";
}

console.log(isPalidrome3("malayalam"));
