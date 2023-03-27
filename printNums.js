/**
 *We want create number like plus

 Expected output
 
     1
     1
     1
     1
     1
55555155555     
     1
     1
     1
     1
     1
 *
 */
const getSpaces = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += " ";
  }
  return str;
};

const printNumPlus = (n) => {
  for (let i = 0; i <= n * 2; i++) {
    if (i === n) {
      let str = "";
      for (let j = 0; j < n; j++) {
        str += n;
      }
      console.log(str + 1 + str);
    } else {
      if (n >= 10) {
        console.log(getSpaces(n * 2) + "1");
      } else {
        console.log(getSpaces(n) + "1" + getSpaces(n));
      }
    }
  }
};

printNumPlus(5);
