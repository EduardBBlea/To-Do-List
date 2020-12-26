const todoManager = () => {

  let todos = [];

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
      return id;
    },
    removedTodo: (todoId) => {
      const newTodos = todos.filter(({ id }) => id !== todoId);
      todos = newTodos;
    },
    toggleTodo: (todoId) => {
      const newTodos = todos.map(({ text, isDone, id }) => {
        return {
          id,
          text,
          isDone: id === todoId ? !isDone : isDone,
        }
      });

      todos = newTodos;
    },
    init: (initialTodos = []) => todos = initialTodos,
    getTodos: () => todos,
  }
};

export default todoManager();