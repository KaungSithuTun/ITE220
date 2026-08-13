const btn = document.querySelector("#save");
btn.addEventListener("click", () => {
  console.log("Saved!");
});
const input = document.querySelector("#name");
input.addEventListener("input", (e) => {
  console.log("typing:", e.target.value);
});
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload
  // handle the data with JS instead
});
