const list = document.querySelector("#list");
// create
const li = document.createElement("li");
li.textContent = "Eggs";
li.classList.add("item");
// insert
list.append(li); // end of list
list.prepend(li); // start of list
// remove
li.remove();
// build from data (Session 1 skills!)
const items = ["Milk", "Bread", "Eggs"];
list.innerHTML = items.map((i) => `<li>${i}</li>`).join("");
