function todosReducer(todos: Todo[] = [], action: any): Todo[] {
    if (action.type === 'ADD_TODO') {
      return [...todos, action.payload];
    } else {
      return todos;
    }
  }

  function todosReducer(todos: Todo[] = [], action: any): Todo[] {
    if (action.type === 'TODO_ADDED') {
      return [...todos, action.payload];
    } else {
      return todos;
    }
  }