// block scope
{
  let a = 1;
  var b = 2;
}
// console.log(a); (ReferenceError)
// console.log(b); // 2
const user = "Nan";
user = "Mai"; // TypeError: assignment
// to constant variable
const scores = [80, 92];
scores.push(75); // A const array can still be modified
