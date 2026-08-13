const name = "Ploy",
  score = 92;
// old
console.log("Hi " + name + ": " + score);
// template literal (backticks)
console.log(`Hi ${name}: ${score}`);
// multi-line strings work too
const html = `
<li>${name} - ${score}</li>
`;
