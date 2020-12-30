const updateTodos = (list, wrapper) => {

  if(!wrapper) return;

  const frag = document.createDocumentFragment();

  list.forEach(({ text, isDone, id }) => {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    if(isDone) {
      li.classList.add("done");
    }
    li.dataset.tid = id;
    li.innerText = text;
    frag.appendChild(li);
  });
  wrapper.innerHTML = "";
  wrapper.appendChild(frag);

  const remainingTodos = list.filter(({isDone})=> !isDone).length;
  document.querySelector(".count").innerText = remainingTodos;




};


const handleTodoToggle = (toggle) => (ev) => {
  if(!ev.target.classList.contains("todo-item")) return;
  const todoId = ev.target.dataset.tid;
  toggle(Number(todoId));
};

const todoManager = () => {

  let todos = [];
  let todosWrapper = null;

  const showToast = () => {
    let toast = document.querySelector("#toast");
    toast.className= "show-toast";
    setTimeout(function(){
      toast.className = toast.className.replace("show-toast", "");
    }, 1000);
  };


  const toggleTodo = (todoId) => {
    const newTodos = todos.map(({ text, isDone, id }) => {
      return {
        id,
        text,
        isDone: id === todoId ? !isDone : isDone,
      }
    });

    todos = newTodos;
    updateTodos(todos, todosWrapper);
  };

  return {
    addTodo: (description, isDone = false) => {
      if(!description) {
        console.error(new Error("ToDo Description Missing"));
        return;
      }
      
      const id = todos.length;
      todos.push({
        text: description,
        isDone,
        id,
      });
      showToast();
      
      updateTodos(todos, todosWrapper);
      
      return id;
    },
    removedTodo: (todoId) => {
      const newTodos = todos.filter(({ id }) => id !== todoId);
      todos = newTodos;
      updateTodos(todos, todosWrapper);
    },
    toggleTodo: toggleTodo,
    init: (initialTodos = [], wrapper = null) => {
      todos = initialTodos;
      todosWrapper = wrapper;

      wrapper.addEventListener("click", handleTodoToggle(toggleTodo));
    },
    getTodos: () => todos,
  }
};

export default todoManager();