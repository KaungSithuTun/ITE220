// modern selectors take CSS syntax
const list = document.querySelector("#list");
const first = document.querySelector(".item");
const all = document.querySelectorAll(".item");
// NodeList: all.forEach(el => ...)
// older but still common
document.getElementById("list");
