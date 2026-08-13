const h1 = document.querySelector("h1");
// content
h1.textContent = "Hello CSC220";
h1.innerHTML = "Hello <em>CSC220</em>";
// attributes & styles
const img = document.querySelector("img");
img.setAttribute("alt", "logo");
img.src = "logo.png";
h1.style.color = "crimson";
// classes - prefer this for styling
h1.classList.add("highlight");
h1.classList.remove("hidden");
h1.classList.toggle("dark");
