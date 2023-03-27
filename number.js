//homework 1

function printNum(n) {
  let str = " ";
  for (let i = 1; i <= n; i++) {
    str += i + " ";
  }
  // console.log(str);
  return str;
}

// homework 2

function reversePrintNum(n) {
  let str = "";
  for (let i = n; i > 0; i--) {
    str += i + " ";
  }
  // console.log(str);
  return str;
}

// homework 3

function printOddNum(n) {
  let str = "";
  for (let i = 1; i <= n; i = i + 2) {
    str += i + " ";
  }
  console.log(str);
}

// homework 4

function printConsNum(n) {
  return printNum(n) + reversePrintNum(n - 1);
}

function giveSpace(n) {
  let str = "";
  for (let i = 0; i < n * 2; i++) {
    str += " ";
  }
  return str;
}

function printReverseNumDiamond(n) {
  for (let i = 1; i <= n; i++) {
    console.log(giveSpace(n - i) + printConsNum(i));
  }
  for (let i = 1; i <= n; i++) {
    console.log(giveSpace(i) + printConsNum(n - i));
  }
}

// printNum(5);

// console.log(reversePrintNum(5));

// printOddNum(7);

// console.log(printConsNum(5));

//printReverseNumDiamond(10);

function numToString(list) {
  let str = "";
  for (let i = 0; i < list.length; i++) {
    str += list[i].toString();
  }
  return str;
}
const addTwoNumbers = (l1, l2) => {
  let num = parseInt(numToString(l1)) + parseInt(numToString(l2));
  let str = "";
  str += num;
  let result = [];
  for (let i = str.length; i > 0; i--) {
    result.push(parseInt(str[i - 1]));
  }
  return result;
};

// console.log(addTwoNumbers([1, 0], [1, 1, 2]));

const stairs = (n) => {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = i; j >= 1; j--) {
      // console.log(j);
      str += j + " ";
    }
    console.log(str);
  }
};

// stairs(5);

const singleNumber = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let j = 0;
    while (nums[i] === nums[j]) {
      j++;
    }
  }
};
