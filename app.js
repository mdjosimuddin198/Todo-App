const addTodo = document.getElementById("add-todo");
const findInput = document.getElementById("input-todo");

// submit button without the reload  page

addTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  todov();
  findInput.value = "";
});

// add todo to an array

let todoValue = JSON.parse(localStorage.getItem("work")) || [];

function todov() {
  //   console.log(todoValue);
  let todoitem = findInput.value;
  todoValue.push(todoitem);
  console.log(todoValue);

  getitem();
}
let UlLists = document.getElementById("ul-list-items");
// find all todo one by one
const getitem = () => {
  UlLists.innerHTML = "";
  todoValue.forEach((todo, idx) => {
    domUpdate(todo, idx);
    localStorage.setItem("work", JSON.stringify(todoValue));
  });
};

// show on dom
const domUpdate = (todo, idx) => {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
  btn.classList.add("deleteBtn");
  li.innerHTML = `${todo}`;
  li.id = `li-${idx}`;
  UlLists.appendChild(li);
  li.appendChild(btn);

  btn.addEventListener("click", () => {
    todoValue.splice(idx, 1);
    localStorage.setItem("work", JSON.stringify(todoValue));
    getitem();
    // alert("hi");
  });
};
// reload but stay
window.onload = () => {
  getitem();
};
