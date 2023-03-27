// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(`${i}.superstar`);
//   } else {
//     console.log(`${i}.rajini`);
//   }
// }

// function printString(str1, str2, length) {
//   let firstLength = str1.length;
//   let secondLength = str2.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < firstLength || j < secondLength; j++) {
//       let str = " ";
//       if (str1[j] === undefined) {
//         str = " " + ` ${str2[j]}` + " " + ` ${str2[j]}`;
//       } else if (str2[j] === undefined) {
//         str = `${str1[j]}` + " " + `  ${str1[j]}` + " ";
//       } else {
//         str = `${str1[j]} ${str2[j]} ${str1[j]} ${str2[j]}`;
//       }
//       console.log(str);
//     }
//   }
// }

function printNums(n) {
  let str = " ";
  for (let i = 1; i <= n; i++) {
    str += ` ${i}`;
    console.log(str);
  }
}

function printNum(n) {
  for (let i = 1; i <= n; i++) {
    let str = " ";
    for (let j = 0; j <= n; j++) {
      str += ` ${i}`;
    }
    console.log(str);
  }
}
printNums(20);

// printNumsOnSqure(13);

// printString("rajini", "superstar", 25);
function printString_alter(str1, str2, length) {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < str1.length || j < str2.length; j++) {
      if (str1[j] === undefined) {
        console.log(" ", str2[j], " ", str2[j]);
      } else if (str2[j] === undefined) {
        console.log(str1[j], " ", str1[j], " ");
      } else {
        console.log(str1[j], str2[j], str1[j], str2[j]);
      }
    }
  }
}

// printString_alter("Mottamurugan", "Kolupan", 5);

function takeAndCenter(n) {
  let length = Math.round(n / 2);
  for (let i = 0; i < length; i++) {
    let str = "";
    for (let j = 0; j < length; j++) {
      str += length;
    }
    console.log(str);
  }
}

// takeAndCenter(9);
