@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
  })
  class TodoComponent {
    @Input() todo: Todo;
  
    constructor(private store: Store<any>) {}
  
    delete() {
      this.store.dispatch({
        type: 'CONFIRM_TODO_DELETION',
        payload: {todoId: this.todo.id}
      });
      this.store.select('confirmTodoDeletionResponse').
        filter(t => t.id === this.todo.id).first().
        subscribe(r => {
          // r is either true or false
        });
    }
  }