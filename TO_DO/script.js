document.querySelector("form").addEventListener("submit", handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") {
    addTodo(input.value);
  }
  input.value = "";
}

function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `
    
    <span class ='list-item-name'>${todo}</span>
            <span
              ><button name="check"><i class="bi bi-check-square"></i></button>
              <button name="delete"><i class="bi bi-trash"></i></button>
            </span>
    
    `;

  // li.classList.add('')
  ul.appendChild(li);
}

document.querySelector("ul").addEventListener("click", handleCheckDelete);

function handleCheckDelete(e) {
  if (e.target.name == "check") {
    checkTodo(e);
    console.log(e.target.name);
  }
  if (e.target.name == "delete") {
    deleteTodo(e);
  }
}

function checkTodo(e) {
  let item = document.querySelector(".list-item-name");
  if (item.style.textDecoration == "line-through") {
    item.style.textDecoration = "none";
  } else {
    item.style.textDecoration = "line-through";
  }
}

function deleteTodo(e) {
  // let item = document.querySelector(".list-item-name");
  // let itemRemove = item.parentNode;
  // itemRemove.remove();
  let item = e.target.parentNode;
  itemParent = item.parentNode;
  itemParent.remove();
}

document.querySelector("#clearAll").addEventListener("click", deleteAll);

function deleteAll() {
  let confirm = window.confirm("are sure want to delete all the tasks ?");
  if (confirm === true) {
    let items = document.querySelector("li");
    items.remove();
  }
}
