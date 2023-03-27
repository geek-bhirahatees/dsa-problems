const gradingStudents = (grades) => {
  let result = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      result.push(grades[i]);
    } else {
      let mark = grades[i] % 5;
      if (mark < 3) {
        result.push(grades[i]);
      } else {
        result.push(grades[i] + (5 - mark));
      }
    }
  }
  return result;
};

console.log(gradingStudents([75, 67, 38, 33]));
