class TodosEffects {
    constructor(private actions: Actions, private http: Http) {}
  
    @Effect() addTodo = this.actions.ofType('ADD_TODO').
      concatMap(todo => this.http.post(…).
      map(() => ({type: 'TODO_ADDED', payload: todo})));
   }
  
  function todosReducer(todos: Todo[] = [], action: any): Todo[] {
    if (action.type === 'TODO_ADDED') {
      return [...todos, action.payload];
    } else {
      return todos;
    }
  }