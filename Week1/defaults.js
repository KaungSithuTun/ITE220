const user = { name: "Beam" };
// age does not exist in user
const { age = 18 } = user;
console.log(age); // 18
const user2 = { name: "Mint", age: 25 };
const { age: age2 = 18 } = user2;
console.log(age2); // 25
// default is used only when value is undefined
