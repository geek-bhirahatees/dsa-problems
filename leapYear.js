const leapYear = (year) => {
  if (year % 4 === 0) {
    return "It is Leap Year";
  }
  return "It is not Leap Year";
};

console.log(leapYear(2014));
