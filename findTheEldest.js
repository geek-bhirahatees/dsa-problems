const findTheEldest = (arrOfObj) => {
  let eldest = arrOfObj[0].age;
  let result = arrOfObj[0];
  for (let i = 1; i < arrOfObj.length - 1; i++) {
    if (eldest < arrOfObj[i].age) {
      eldest = arrOfObj[i].age;
      result = arrOfObj[i];
    }
  }
  return result.name;
};

console.log(
  findTheEldest([
    {
      name: "Kishore",
      age: 30,
      stipend: 1000,
      marks: { maths: 50, physics: 79, chemistry: 80 },
    },
    {
      name: "Razzak",
      age: 18,
      stipend: 10000,
      marks: { maths: 80, physics: 75, chemistry: 70 },
    },
    {
      name: "Ajmal",
      age: 35,
      stipend: 10000,
      marks: { maths: 35, physics: 45, chemistry: 50 },
    },
    {
      name: "Aishwarya",
      age: 21,
      stipend: 10000,
      marks: { maths: 65, physics: 80, chemistry: 85 },
    },
  ])
);
