@Component({
    selector: 'todos',
    templateUrl: './todos.component.html'
  })
  class TodosComponent {
    public todos: Observable<Todo[]>;
  
    constructor(private store: Store<any>) {
      this.todos = store.select('todos');
    }
  
    addTodo(data: {text: string}) {
      this.store.dispatch({
        type: 'ADD_TODO',
        payload: data
      });
    }

  }