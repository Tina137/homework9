let str = "apple apple of banana one   space    space WALK   ";
let arr = str.split(" ");
let newArr = [];
for (let e of arr) {
  if (e.length > 2) {
    newArr.push(e.charAt(0).toUpperCase() + e.slice(1));
  } else {
    newArr.push(e);
  }
}
console.log(newArr.join(" "));

// ///////////////
let users = [
  {
    name: "name1",
    balance: 400,
    friends: 0,
    skill: "gg",
    friend: "",
  },
  {
    name: "name2",
    balance: 1,
    friends: 10,
    skill: "gg",
    friend: "gg",
  },
  {
    name: "name3",
    balance: 8,
    friends: 2,
    skill: "f",
    friend: "pp",
  },
];

// #1
let b = 0;
users.map((e) => {
  b += e.balance;
});
console.log(b);

// #2
console.log(users.filter((e) => e.friend === "gg"));

// #3
users.sort((a, b) => {
  return a.friends - b.friends;
});
console.log(users);

// #4
let skills = [];
for (let user of users) {
  skills.push(user.skill);
}
let sorted = skills.filter((a, b, d) => {
  return d.indexOf(a) === b;
});

sorted.sort();
console.log(sorted);
