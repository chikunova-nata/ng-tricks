class TodosEffects {
    constructor(private actions: Actions, private http: Http) {}
  
    @Effect() addTodo = this.actions.ofType('ADD_TODO').
      concatMap(todo => this.http.post(…).
      map(() => ({type: 'TODO_ADDED', payload: todo})));
  }
  