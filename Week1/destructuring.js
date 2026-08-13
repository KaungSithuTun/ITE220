const user = { id: 7, name: "Beam", role: "admin" };
//Without destructuring, access each property
separately;
const name = user.name;
const role = user.role;
// object destructuring
const { name, role } = user;
