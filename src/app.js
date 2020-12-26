import todoManager from "./todoManager";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const todoWrapper = document.querySelector(".todo-wrapper");

const createTodoElement = (value, id, isDone = false) => {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.dataset.tid = id;
  li.innerText = value;
  return li;
};

const handleTodoToggle = (ev) => {
  if(!ev.target.classList.contains("todo-item")) return;
  const todoId = ev.target.dataset.tid;
  todoManager.toggleTodo(Number(todoId));
  ev.target.classList.toggle("done");
};

const addTask = (value) => {
    if(!value) return;
    const todoId = todoManager.addTodo(value);
    todoWrapper.appendChild(createTodoElement(value, todoId));
};

function startApp () {
  todoManager.init([]);

  todoWrapper.addEventListener("click", handleTodoToggle);

  btn.addEventListener("click", () => {
    addTask(input.value);
    input.value = "";
  });
  input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask(e.target.value);
        e.target.value = "";
      };
  });
};

startApp();




