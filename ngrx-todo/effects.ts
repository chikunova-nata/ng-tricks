class TodosEffects {
    constructor(private actions: Actions, private env: Env) {}
  
    @Effect() addTodo = this.actions.typeOf('ADD_TODO').map(add => {
      if (add.payload.addLast) {
        return ({type: 'APPEND_TODO', payload: add.payload});
      } else {
        return ({type: 'INSERT_TODO', payload: add.payload});
      }
    });

    @Effect() addTodo = this.actions.typeOf('ADD_TODO').map(addTodo => {
        if (this.env.confirmationIsOn) {
          return ({type: ‘ADD_TODO_WITH_CONFIRMATION’, payload: addTodo.payload});
        } else {
          return ({type: ‘ADD_TODO_WITHOUT_CONFIRMATION', payload: addTodo.payload});
        }
      });

    @Effect() addTodo = this.actions.typeOf('REQUEST_ADD_TODO').flatMap(add => [
        {type: 'ADD_TODO', payload: add.payload},
        {type: 'LOG_OPERATION', payload: {loggedAction: 'ADD_TODO', payload: add.payload}}
      ]);


      @Effect() aggregator = this.actions.typeOf(‘ADD_TODO’).flatMap(a =>
        zip(
          // note how we use a correlation id to select the right action
          this.actions.filter(t => t.type == 'TODO_ADDED' && t.payload.id === a.payload.id).first(),
          this.actions.filter(t => t.type == ‘LOGGED' && t.payload.id === a.payload.id).first()
        )
      ).map(pair => ({
        type: 'ADD_TODO_COMPLETED',
        payload: {id: pair[0].payload.id, log: pair[1].payload}
      }));


      @Effects() a = this.actions.typeOf(‘ADD_TODO’).
        aggregate(['TODO_ADDED', 'OPERATION_ADDED'], (a, t) => t.payload.id === a.payload.id).
        map(pair => ({type: 'ADD_TODO_COMPLETED', payload: {id: pair[0].id}}));

        @Effect() addTodo =
        this.actions.ofType('ADD_TODO'). // filtering decider
        map(t => ({type: t.type, payload: {...payload, user: this.currentUser}})). // content enricher
        map(t => t.append ? // content-based decider
            ({type: 'APPEND_TODO', payload: t.payload}) :
            ({type: 'INSERT_TODO', payload: t.payload})).
        flatMap(t => [t, {type: 'LOG_OPERATION', payload: t}]); // splitter

        
        @Effect() appendTodo =
            this.actions.ofType('APPEND_TODO').
            mergeMap(t => this.http.post(...));

        @Effect() insertTodo =
            this.actions.ofType('INSERT_TODO').
            mergeMap(t => this.http.post(...));


  }