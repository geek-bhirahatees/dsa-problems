/**
 * this funtions resturn that string is palindrome or not
 *
 * Ex string = "malayalam"
 *
 * Expected output "It's Palindrome"
 */

function isPalidrome(string) {
  let strLength = string.length;
  for (let i = 0; i < strLength - 1; i++) {
    if (string[i] !== string[strLength - 1]) {
      return "It's Not Palindrome";
    }
  }
  return "It's Palindrome";
}
