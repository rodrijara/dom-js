const listTasks = document.querySelector(".list-tasks");
let countItemTask = 0;

const btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click", addTask);

function addTask(e) {
  e.preventDefault();
  console.log("clicked");
  const inputTask = document.querySelector("#input-task");
  if (inputTask.value === "") {
    return alert("Enter a task");
  }
  listTasks.style.display = "";

  const itemTask = document.createElement("li");
  itemTask.className = "container";
  itemTask.innerText = inputTask.value;

  const btnRm = document.createElement("input");
  btnRm.setAttribute("type", "button");
  btnRm.setAttribute("value", "REMOVE");

  listTasks.appendChild(itemTask);
  itemTask.appendChild(btnRm);
  inputTask.value = "";

  countItemTask++;

  btnRm.addEventListener("click", (e) => {
    if (countItemTask == 1) {
      listTasks.remove();
    }
    itemTask.remove();
    countItemTask--;
  });
}
