const user = { id: 7, name: "Beam", role: "admin" };
// get name, but save it as n
const { name: n } = user;
console.log(n); // "Beam"
console.log(name); // ReferenceError
// rename more clearly
const { role: userRole } = user;
console.log(userRole); // "admin"
