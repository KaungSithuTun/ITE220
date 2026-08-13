const form = document.querySelector("#todo-form");
const input = document.querySelector("#task");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `${text} <button type="button" class="remove-btn">X</button>`;
  list.append(li);

  input.value = "";
  input.focus();
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }

  if (e.target.classList.contains("remove-btn")) {
    e.target.closest("li").remove();
  }
});
