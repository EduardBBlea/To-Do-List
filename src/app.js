import todoManager from "./todoManager";

const btn = document.querySelector("button");
const input = document.querySelector("input");

function startApp () {
  todoManager.init(
    [],
    document.querySelector(".todo-wrapper"),
  );
 
  btn.addEventListener("click", () => {
    if(!input.value) return;
    todoManager.addTodo(input.value);
    input.value = "";
  });
  input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && e.target.value) {
        todoManager.addTodo(e.target.value);
        e.target.value = "";
      };
  });
};

startApp();




