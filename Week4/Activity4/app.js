const url = "https://jsonplaceholder.typicode.com/users";

const fetchBtn = document.querySelector("#fetch-btn");
const list = document.querySelector("#users");

const fetchUsers = async () => {

  list.innerHTML = "<li>Loading users...</li>";

  try {
  
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP Error status: ${res.status}`);
    }

    const users = await res.json();

    list.innerHTML = users
      .map(({ name, email }) => `<li><strong>${name}</strong> — ${email}</li>`)
      .join("");
  } catch (err) {

    console.error(err);
    list.innerHTML = '<li class="error">Could not load users. Please try again later.</li>';
  }
};

fetchBtn.addEventListener("click", fetchUsers);
