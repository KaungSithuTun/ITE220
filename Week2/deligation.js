// one listener on the parent
// handles ALL <li> - even future ones
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  li.classList.toggle("done");
});
