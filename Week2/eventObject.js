document.addEventListener("click", (e) => {
  console.log(e.type); // "click"
  console.log(e.target); // element clicked
});
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop default
  const { value } = document.querySelector("#task");
});
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
