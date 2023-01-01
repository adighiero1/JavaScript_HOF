console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
  return function (plusNumber) {
    plusNumber += number;
    return plusNumber;
  };
}

let plus15 = plus(15);

console.log(plus15(10));
console.log("EXERCISE 2:\n==========\n");
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((element) => {
  console.log(element.name);
});

console.log("EXERCISE 3:\n==========\n");

let newUserArray = users.map((user) => {
  return {
    name: user.name,
    score: user.score,
  };
});

console.log(newUserArray);

console.log("EXERCISE 4:\n==========\n");

let newFilterArray = users.filter((user) => {
  if (user.isActive === true) {
    return {
      name: user.name,
      age: user.age,
      score: user.score,
      isActive: user.isActive,
    };
  }
});

console.log(newFilterArray);

console.log("EXERCISE 5:\n==========\n");

users.sort((a, b) => {
  if (a.score < b.score) return 1;
  else return -1;
});

console.log(users);

console.log("EXERCISE 6:\n==========\n");

let average = users.reduce((sum, user) => sum + user.score, 0) / users.length;
console.log(average);
